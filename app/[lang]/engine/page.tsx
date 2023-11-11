import Feature from '../components/Feature';
import { getLocale } from '../locales';
import {
  animationImages,
  lightningImages,
  materialsImages,
  modelImportingImages,
  particleSystemsImages,
  physicsImages,
  raycastingImages,
  scriptingImages,
  soundImages,
} from '../../data/features/featuresImages';

import {
  animationVideos,
  lightningVideos,
  materialsVideos,
  modelImportingVideos,
  particleSystemsVideos,
  physicsVideos,
  raycastingVideos,
  scriptingVideos,
  soundVideos,
} from '../../data/features/featuresVideos';

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
      <h1 className="mt-8 mb-4 text-2xl font-semibold tracking-wide sm:text-4xl">
        AXOLOTL ENGINE
      </h1>
      <h2 className="my-4 text-xl tracking-wide sm:text-3xl">
        {locale.FEATURES}
      </h2>
      <p className="m-4 text-center leading-8 sm:w-1/2 sm:text-2xl">
        {locale.FEATURES_DESCRIPTION}
      </p>
      <Feature
        title={locale.MODEL_IMPORTING}
        description={locale.MODEL_IMPORTING_DESCRIPTION}
        featureImages={modelImportingImages}
        featureVideos={modelImportingVideos}
      />
      <Feature
        title={locale.ANIMATION}
        description={locale.ANIMATION_DESCRIPTION}
        featureImages={animationImages}
        featureVideos={animationVideos}
      />
      <Feature
        title={locale.SCRIPTING}
        description={locale.SCRIPTING_DESCRIPTION}
        featureImages={scriptingImages}
        featureVideos={scriptingVideos}
      />
      <Feature
        title={locale.LIGHTNING}
        description={locale.LIGHTNING_DESCRIPTION}
        featureImages={lightningImages}
        featureVideos={lightningVideos}
      />
      <Feature
        title={locale.MATERIALS}
        description={locale.MATERIALS_DESCRIPTION}
        featureImages={materialsImages}
        featureVideos={materialsVideos}
      />
      <Feature
        title={locale.RAYCASTING}
        description={locale.RAYCASTING_DESCRIPTION}
        featureImages={raycastingImages}
        featureVideos={raycastingVideos}
      />
      <Feature
        title={locale.PARTICLE_SYSTEMS}
        description={locale.PARTICLE_SYSTEMS_DESCRIPTION}
        featureImages={particleSystemsImages}
        featureVideos={particleSystemsVideos}
      />
      <Feature
        title={locale.PHYSICS}
        description={locale.PHYSICS_DESCRIPTION}
        featureImages={physicsImages}
        featureVideos={physicsVideos}
      />
      <Feature
        title={locale.SOUND}
        description={locale.SOUND_DESCRIPTION}
        featureImages={soundImages}
        featureVideos={soundVideos}
      />
    </main>
  );
}
