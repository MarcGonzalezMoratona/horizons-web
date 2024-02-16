import Feature from '../components/Feature';
import { getLocale } from '../locales';
import {
  animationImages,
  lightingImages,
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
  lightingVideos,
  materialsVideos,
  modelImportingVideos,
  particleSystemsVideos,
  physicsVideos,
  raycastingVideos,
  scriptingVideos,
  soundVideos,
} from '../../data/features/featuresVideos';
import { GlowingButton } from '../components/GlowingButton';
import { GearIcon } from '@radix-ui/react-icons';

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
      <div className="hidden lg:block">
        <GlowingButton
          mainText="Axolotl Engine 1.0.0"
          CTAText={locale.DOWNLOAD}
          url="https://github.com/Horizons-Games/Axolotl-Engine/releases/download/v1.0/AxolotlEngine.1.0.zip"
          icon={
            <GearIcon className="h-5 w-5 animate-spin text-secondary-600 transition duration-200 sm:animate-none sm:group-hover:animate-spin" />
          }
        />
      </div>
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
        title={locale.LIGHTING}
        description={locale.LIGHTING_DESCRIPTION}
        featureImages={lightingImages}
        featureVideos={lightingVideos}
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
