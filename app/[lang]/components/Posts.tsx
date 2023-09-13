'use client';
import Post from '../components/Post';
import { posts } from '../../data/posts';
import React from 'react';
import { Locale } from '../locales/types/locales';
import { useSearchParams } from 'next/navigation';

type PostsProps = {
  locale: Locale;
  lang: string;
};

export default function Posts({ locale, lang }: PostsProps) {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page'));

  return (
    <>
      {sortedPosts.map((post) => {
        return (
          <React.Fragment key={post.id}>
            {post.id > posts.length - currentPage * 4 &&
              post.id <= posts.length - (currentPage - 1) * 4 && (
                <Post data={post} locale={locale} lang={lang} />
              )}
          </React.Fragment>
        );
      })}
    </>
  );
}
