import { useState } from 'react';
import { useDevice } from '../hooks/useDevice';
import Connection from './Connection';
import { Locale } from '../locales/types/locales';

type ProjectPhasesProps = {
  nextMilestone: string;
  locale: Locale;
};

export default function ProjectPhases({
  nextMilestone,
  locale,
}: ProjectPhasesProps) {
  const device = useDevice();
  const isDesktop = device === 'desktop';
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const milestones = [
    'Concept Discovery',
    'Vertical Slice 1',
    'Vertical Slice 2',
    'Vertical Slice 3',
    'Alpha',
    'Beta',
    'Gold Master',
    'Release',
  ];

  return (
    <>
      <div className="flex gap-8">
        <div>
          <Connection animateSlide={nextMilestone === 'VS1'} />
          <Connection
            animatePing={nextMilestone === 'VS1'}
            animateSlide={nextMilestone === 'VS2'}
          />
          <Connection
            animatePing={nextMilestone === 'VS2'}
            animateSlide={nextMilestone === 'VS3'}
          />
          <Connection
            animatePing={nextMilestone === 'VS3'}
            animateSlide={nextMilestone === 'Alpha'}
          />
          <Connection
            animatePing={nextMilestone === 'Alpha'}
            animateSlide={nextMilestone === 'Beta'}
          />
          <Connection
            animatePing={nextMilestone === 'Beta'}
            animateSlide={nextMilestone === 'GM'}
          />
          <Connection
            animatePing={nextMilestone === 'GM'}
            animateSlide={nextMilestone === 'Release'}
          />
          <Connection animatePing={nextMilestone === 'Published'} />
        </div>
        <ol className="flex flex-col justify-center">
          <li
            className={`mt-[60px] h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'CD' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(0)}
          >
            {milestones[0]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'VS1' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(1)}
          >
            {milestones[1]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'VS2' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(2)}
          >
            {milestones[2]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'VS3' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(3)}
          >
            {milestones[3]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'Alpha' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(4)}
          >
            {milestones[4]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'Beta' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(5)}
          >
            {milestones[5]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'GM' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(6)}
          >
            {milestones[6]}
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'Release' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(7)}
          >
            {milestones[7]}
          </li>
        </ol>
      </div>
      {isDesktop && (
        <section className="flex flex-col items-center gap-4">
          <h3 className="text-xl">{milestones[selectedMilestone]}</h3>
          <div className="self-center rounded-xl bg-neutral-900 dark:bg-neutral-800 md:h-[270px] md:w-[480px] lg:h-[360px] lg:w-[640px] xl:h-[540px] xl:w-[960px] ">
            {selectedMilestone === 0 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                <video className="rounded-xl" autoPlay controls>
                  <source src="/engineConceptDiscovery.mp4" type="video/mp4" />
                </video>
              </div>
            )}
            {selectedMilestone === 1 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                <video className="rounded-xl" autoPlay controls>
                  <source src="/cargoBay.mp4" type="video/mp4" />
                </video>
              </div>
            )}
            {selectedMilestone === 2 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                <video className="rounded-xl" autoPlay controls>
                  <source src="/zombunny.mp4" type="video/mp4" />
                </video>
              </div>
            )}
            {selectedMilestone === 3 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                {locale.CONTENT_VS3}
              </div>
            )}
            {selectedMilestone === 4 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                {locale.CONTENT_ALPHA}
              </div>
            )}
            {selectedMilestone === 5 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                {locale.CONTENT_BETA}
              </div>
            )}
            {selectedMilestone === 6 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                {locale.CONTENT_GM}
              </div>
            )}
            {selectedMilestone === 7 && (
              <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
                {locale.CONTENT_RELEASE}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
