import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
const ComingSoon = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <FontAwesomeIcon icon={faPersonDigging} className="text-8xl " />
      <h1 className="text-4xl sm:text-6xl font-semibold text-center mx-2">
        COMING SOON
      </h1>
      <h2 className="text-xl sm:text-2xl text-center mx-2">
        Our website is under construction, follow us in our social networks to
        stay tuned!
      </h2>
    </div>
  );
};

export default ComingSoon;
