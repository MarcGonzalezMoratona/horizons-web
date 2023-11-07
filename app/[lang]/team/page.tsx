import { Metadata } from 'next';
import { team } from '../../data/team';
import { collaborators } from '../../data/collaborators';
import ProfilePicture from '../components/ProfilePicture';
import { getLocale } from '../locales';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locale = await getLocale(lang);
  return {
    title: `Horizons Games - ${locale.THE_TEAM}`,
  };
}

export default async function Team({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locale = await getLocale(lang);

  return (
    <main className="flex flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <h1 className="my-8 text-2xl font-semibold tracking-wide sm:text-4xl">
        {locale.THE_TEAM.toUpperCase()}
      </h1>
      <h2 className="my-8 text-lg font-semibold tracking-wide sm:text-2xl">
        {locale.DEVELOPMENT_TEAM.toUpperCase()}
      </h2>
      <ul className="mx-2 my-8 grid grid-cols-2 gap-4 sm:mx-8 sm:grid-cols-3 sm:gap-8 md:gap-12 xl:grid-cols-4">
        {team.partners.map((partner, index) => {
          return (
            <ProfilePicture
              partner={partner}
              index={index}
              key={partner.name}
              folder="team"
            />
          );
        })}
      </ul>
      <h2 className="my-8 text-lg font-semibold tracking-wide sm:text-2xl">
        {locale.SOUND_TEAM.toUpperCase()}
      </h2>
      <ul className="mx-2 my-8 grid grid-cols-2 gap-4 sm:mx-8 sm:grid-cols-3 sm:gap-8 md:gap-12 xl:grid-cols-4">
        {collaborators.partners.map((partner, index) => {
          return (
            <ProfilePicture
              partner={partner}
              index={index}
              key={partner.name}
              folder="collaborators"
            />
          );
        })}
      </ul>
    </main>
  );
}
