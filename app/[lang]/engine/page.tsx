import Feature from '../components/Feature';
import { getLocale } from '../locales';

export async function generateMetadata() {
  return {
    title: 'Horizons Games - Axolotl Engine',
  };
}

export default async function Engine({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const locale = await getLocale(lang);

  return (
    <main className="flex flex-col items-center justify-center bg-neutral-100 font-montserrat text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <h1 className="mt-8 mb-4 text-xl font-semibold tracking-wide sm:text-4xl">
        AXOLOTL ENGINE
      </h1>
      <h2 className="my-4 text-xl tracking-wide sm:text-3xl">
        {locale.FEATURES}
      </h2>
      <p className="m-4 text-center text-sm leading-8 sm:w-1/3 sm:text-lg">
        {locale.FEATURES_DESCRIPTION}
      </p>
      <Feature
        title={locale.ANIMATION}
        description={locale.ANIMATION_DESCRIPTION}
      />
      <Feature
        title={locale.SCRIPTING}
        description={locale.SCRIPTING_DESCRIPTION}
      />
      <Feature
        title={locale.LIGHTNING}
        description={locale.LIGHTNING_DESCRIPTION}
      />
      <Feature
        title={locale.MATERIALS}
        description={locale.MATERIALS_DESCRIPTION}
      />
      <Feature
        title={locale.RAYCASTING}
        description={locale.RAYCASTING_DESCRIPTION}
      />
      <Feature
        title={locale.PARTICLE_SYSTEMS}
        description={locale.PARTICLE_SYSTEMS_DESCRIPTION}
      />
      <Feature
        title={locale.PHYSICS}
        description={locale.PHYSICS_DESCRIPTION}
      />
      <Feature title={locale.SOUND} description={locale.SOUND_DESCRIPTION} />
    </main>
  );
}
