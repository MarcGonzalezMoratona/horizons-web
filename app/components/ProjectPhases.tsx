import { useState } from 'react';
import Connection from '../../app/components/Connection';
import { useDevice } from '../hooks/useDevice';

type ProjectPhasesProps = {
  nextMilestone: string;
};

export default function ProjectPhases({ nextMilestone }: ProjectPhasesProps) {
  const device = useDevice();
  const isDesktop = device === 'desktop';
  const [selectedMilestone, setSelectedMilestone] = useState(0);

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
            Concept Discovery
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'VS1' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(1)}
          >
            Vertical Slice 1
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'VS2' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(2)}
          >
            Vertical Slice 2
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'VS3' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(3)}
          >
            Vertical Slice 3
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'Alpha' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(4)}
          >
            Alpha
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'Beta' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(5)}
          >
            Beta
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'GM' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(6)}
          >
            Gold Master
          </li>
          <li
            className={`h-20 cursor-pointer select-none text-xl ${
              nextMilestone === 'Release' && 'font-bold'
            }`}
            onClick={() => setSelectedMilestone(7)}
          >
            Release
          </li>
        </ol>
      </div>
      {isDesktop && (
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
              Contenido de la vertical slice 2
            </div>
          )}
          {selectedMilestone === 3 && (
            <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
              El contenido de la vertical slice 3 estará disponible a partir del
              01/06/2023.
            </div>
          )}
          {selectedMilestone === 4 && (
            <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
              El contenido de la alpha estará disponible a partir del
              29/06/2023.
            </div>
          )}
          {selectedMilestone === 5 && (
            <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
              El contenido de la beta estará disponible a partir del 13/09/2023.
            </div>
          )}
          {selectedMilestone === 6 && (
            <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
              El contenido de la gold master estará disponible a partir del
              11/10/2023.
            </div>
          )}
          {selectedMilestone === 7 && (
            <div className="flex h-full w-full items-center justify-center text-2xl text-neutral-100">
              El contenido de la release estará disponible a partir del
              10/11/2023.
            </div>
          )}
        </div>
      )}
    </>
  );
}
