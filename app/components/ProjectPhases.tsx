import Connection from '../../app/components/Connection';

type ProjectPhasesProps = {
  nextMilestone: string;
};

export default function ProjectPhases({ nextMilestone }: ProjectPhasesProps) {
  return (
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
          className={`mt-[60px] h-20 text-xl ${
            nextMilestone === 'CD' && 'font-bold'
          }`}
        >
          Concept Discovery
        </li>
        <li
          className={`h-20 text-xl ${nextMilestone === 'VS1' && 'font-bold'}`}
        >
          Vertical Slice 1
        </li>
        <li
          className={`h-20 text-xl ${nextMilestone === 'VS2' && 'font-bold'}`}
        >
          Vertical Slice 2
        </li>
        <li
          className={`h-20 text-xl ${nextMilestone === 'VS3' && 'font-bold'}`}
        >
          Vertical Slice 3
        </li>
        <li
          className={`h-20 text-xl ${nextMilestone === 'Alpha' && 'font-bold'}`}
        >
          Alpha
        </li>
        <li
          className={`h-20 text-xl ${nextMilestone === 'Beta' && 'font-bold'}`}
        >
          Beta
        </li>
        <li className={`h-20 text-xl ${nextMilestone === 'GM' && 'font-bold'}`}>
          Gold Master
        </li>
        <li
          className={`h-20 text-xl ${
            nextMilestone === 'Release' && 'font-bold'
          }`}
        >
          Release
        </li>
      </ol>
    </div>
  );
}
