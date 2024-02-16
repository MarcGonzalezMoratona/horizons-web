import { GearIcon } from '@radix-ui/react-icons';
// import Carousel from './components/Carousel';
import FAQs from './components/FAQs';
// import ProjectPhases from './components/ProjectPhases';
import { GlowingButton } from './components/GlowingButton';
import EngineDescription from './components/EngineDescription';
import { getLocale } from './locales';
import Parallax from './components/Parallax';
import Tools from './components/Tools';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locale = await getLocale(lang);

  // const date = new Date(Date.now());
  // let nextMilestone = 'Gold Master';
  // const dates = {
  //   CD: new Date('2023-03-14'),
  //   VS1: new Date('2023-03-28'),
  //   VS2: new Date('2023-04-25'),
  //   VS3: new Date('2023-06-01'),
  //   Alpha: new Date('2023-06-29'),
  //   Beta: new Date('2023-09-13'),
  //   'Gold Master': new Date('2023-10-11'),
  //   Release: new Date('2023-11-17'),
  // };
  // if (date >= dates.CD && date < dates.VS1) nextMilestone = 'VS1';
  // else if (date >= dates.VS1 && date < dates.VS2) nextMilestone = 'VS2';
  // else if (date >= dates.VS2 && date < dates.VS3) nextMilestone = 'VS3';
  // else if (date >= dates.VS3 && date < dates.Alpha) nextMilestone = 'Alpha';
  // else if (date >= dates.Alpha && date < dates.Beta) nextMilestone = 'Beta';
  // else if (date >= dates.Beta && date < dates['Gold Master'])
  //   nextMilestone = 'GM';
  // else if (date >= dates['Gold Master'] && date < dates.Release)
  //   nextMilestone = 'Release';
  // else nextMilestone = 'Published';

  const FAQsContent = [
    { title: locale.FAQ_1, description: locale.FAQ_1_ANSWER },
    {
      title: locale.FAQ_2,
      description: locale.FAQ_2_ANSWER,
      link: ' GitHub.',
      url: 'https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v1.0/AxolotlEngine.1.0.zip',
    },
    {
      title: locale.FAQ_3,
      description: locale.FAQ_3_ANSWER,
      link: ' GitHub.',
      url: 'https://github.com/Horizons-Games/Axolotl-Engine/releases',
    },
    { title: locale.FAQ_4, description: locale.FAQ_4_ANSWER },
    { title: locale.FAQ_5, description: locale.FAQ_5_ANSWER },
    { title: locale.FAQ_6, description: locale.FAQ_6_ANSWER },
    { title: locale.FAQ_7, description: locale.FAQ_7_ANSWER },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
        <Parallax />
        <EngineDescription
          slogan={locale.ENGINE_DESCRIPTION_TITLE}
          description={locale.ENGINE_DESCRIPTION}
        />
        <GlowingButton
          mainText="Axolotl Engine 1.0.0"
          CTAText={locale.SEE_NEWS}
          url="https://github.com/Horizons-Games/Axolotl-Engine/releases"
          icon={
            <GearIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          }
        />
        <h2 className="my-8 mx-4 text-center text-2xl sm:mx-0 sm:w-2/3 sm:text-4xl">
          {locale.USED_TOOLS_AND_TECHNOLOGIES}
        </h2>
        <div
          className="relative z-0 my-4 h-20 w-5/6 overflow-hidden before:absolute 
          before:left-0 before:z-10 before:h-full before:w-10 before:justify-self-start before:bg-gradient-to-r before:from-neutral-100 before:to-transparent after:absolute 
          after:right-0 after:z-10 after:h-full after:w-10 after:bg-gradient-to-l after:from-neutral-100 after:to-transparent dark:bg-neutral-900 
          dark:before:from-neutral-900 dark:after:from-neutral-900 sm:h-32 
          sm:w-2/3 before:md:w-52 after:md:w-52"
        >
          <ul className="absolute top-0 left-0 flex w-[2184px] animate-slideLeft gap-6 sm:w-[3520px] sm:gap-10">
            <Tools />
          </ul>
        </div>
        {/* <section className="flex w-full flex-col justify-center">
          <h2 className="mx-4 my-8 text-center text-2xl sm:mx-0 sm:text-4xl">
            {locale.OUR_GAME_DEVELOPMENT_JOURNEY}
          </h2>
          <div
            className={`flex w-full ${
              isMobile ? 'justify-center' : 'justify-evenly'
            }`}
          >
            <ProjectPhases nextMilestone={nextMilestone} />
          </div>
        </section> */}
        <FAQs content={FAQsContent} locale={locale} />
      </main>
    </>
  );
}
