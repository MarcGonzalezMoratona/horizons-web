import { NextResponse } from 'next/server';

export const supportedLocales = ['en', 'es', 'ca', 'fr'];
const defaultLocale = 'en';

// Get the preferred locale
function getLocale(request) {
  const pathname = request.nextUrl.pathname;
  const languageSegment = pathname.split('/')[1];

  if (!supportedLocales.includes(languageSegment)) {
    return defaultLocale;
  }

  return languageSegment || defaultLocale;
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const isLocaleValid = supportedLocales.includes(pathname.split('/')[1]);
  const pathnameIsMissingLocale =
    supportedLocales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    ) && isLocaleValid;

  if (pathname === '/sitemap.xml') {
    return NextResponse.next(); // Don't perform any redirection
  }

  // Avoid redirection if the URL ends with these extensions
  const isMediaExtension = [
    '.png',
    '.svg',
    '.jpg',
    '.mp4',
    '.pdf',
    '.ico',
  ].some((extension) => pathname.endsWith(extension));

  const locale = getLocale(request);

  const isBlogPage = pathname.startsWith(`/${locale}/blog`);
  const isPostPage = pathname.startsWith(`/${locale}/blog/`);
  const hasQuery = request.nextUrl.searchParams.has('page');

  if (isBlogPage && !hasQuery && !isPostPage) {
    return NextResponse.redirect(new URL('?page=1', request.url));
  }

  if (!isLocaleValid && !isMediaExtension)
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );

  if (pathnameIsMissingLocale && !isMediaExtension) {
    // Redirect if there is no locale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
