import Head from 'next/head';
import Layout from '../../app/components/Layout';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { usePageHandler } from '../../app/hooks/usePageInfo';
import Feature from '../../app/components/Feature';

export default function Engine() {
  const { t } = useTranslation('common');
  const PageHandler = usePageHandler();

  useEffect(() => {
    PageHandler('engine');
  });

  return (
    <>
      <Head>
        <title>{`Horizons Games - Axolotl Engine`}</title>
        <meta
          name="description"
          content="Welcome to the official website of Horizons Games! We are an AAA video games studio based in Barcelona."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="mt-8 mb-4 text-xl font-semibold tracking-wide sm:text-4xl">
          AXOLOTL ENGINE
        </h1>
        <h2 className="my-4 text-xl tracking-wide sm:text-3xl">
          {t('FEATURES')}
        </h2>
        <p className="m-4 text-center text-sm leading-8 sm:w-1/3 sm:text-lg">
          Axolotl Engine ofrece una amplia gama de funcionalidades para
          potenciar la creatividad y la eficiencia en la creación de
          videojuegos. El motor posee un conjunto de herramientas fáciles de
          usar que permiten a los desarrolladores crear y diseñar niveles,
          personajes, objetos y más, de forma rápida y eficiente.
        </p>
        <Feature
          title="Animación"
          description="Crea animaciones suaves y realistas para tus personajes y objetos con una interfaz sencilla e intuitiva. 
          Visualiza los resultados en tiempo real y personaliza tus animaciones. 
          Potencia tu creatividad y lleva tus juegos al siguiente nivel con nuestro motor de animación de última generación."
        />
        <Feature
          title="Scripting"
          description="Explora el versátil sistema de scripting de Axolotl engine, 
          diseñado para brindarte un control total sobre la lógica y la jugabilidad de tus juegos 
          que te permitirá crear mecánicas únicas. Nuestra herramienta de scripting personalizada 
          te permitirá ajustar el comportamiento de tu juego a tu visión creativa."
        />
        <Feature
          title="Iluminación"
          description="Experimenta un realismo visual impactante con la avanzada tecnología de iluminación de Axolotl Engine.
          ¡Tus escenas contarán con iluminación global y local, y podrás personalizar la atmósfera de tus juegos para sumergir 
          a tus jugadores en una experiencia inmersiva y envolvente!"
        />
        <Feature
          title="Materiales"
          description="Crea materiales, texturas y shaders de alta calidad para tus personajes, objetos y entornos de forma sencilla.
          Personaliza la apariencia de tus modelos, desde metales brillantes hasta madera desgastada o cristal translúcido.
          Con nuestro sistema de materiales, podrás añadir un nivel de realismo asombroso a tus juegos, 
          ¡todo con solo unos pocos clics!"
        />
        <Feature
          title="Trazado de rayos"
          description="Con la tecnología de trazado de rayos de Axolotl Engine podrás simular el comportamiento realista de la luz 
          y los objetos en tus juegos. Desde detección de colisiones precisas hasta efectos visuales impactantes como reflejos y sombras, 
          nuestro sistema de raycasting te permite crear niveles con una increíble fidelidad visual."
        />
        <Feature
          title="Sistemas de partículas"
          description="Crea efectos visuales sorprendentes como fuego, humo, explosiones y más con nuestro sistema de generación de partículas en 2D y 3D.
          Personaliza el tamaño, la forma, el comportamiento y movimiento de las partículas para crear efectos visuales de alta calidad, impactantes, únicos y realistas.
          Mejora la experiencia de juego con las potentes opciones de generación y configuración de sistemas de partículas de Axolotl Engine."
        />
        <Feature
          title="Física"
          description="Con su motor de física de última generación, los jugadores disfrutarán de movimientos suaves y realistas, 
          colisiones precisas, simulación de objetos y materiales, y efectos de partículas detallados. 
          La funcionalidad de física de Axolotl Engine proporciona a los desarrolladores las herramientas necesarias para 
          crear interacciones realistas, lo que resulta en una experiencia de juego única y emocionante."
        />
      </Layout>
    </>
  );
}
