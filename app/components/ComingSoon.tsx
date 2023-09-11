import useTranslation from 'next-translate/useTranslation';
import { useIsDarkMode } from '../hooks/useTheme';
import { Horizons, HorizonsWhite } from './Horizons';

const ComingSoon = () => {
  const { t } = useTranslation('common');
  const isDarkMode = useIsDarkMode();

  return (
    <div className="mt-12 flex w-full flex-col items-center gap-4">
      {isDarkMode ? (
        <HorizonsWhite className="h-32 w-32 select-none" />
      ) : (
        <Horizons className="h-32 w-32 select-none" />
      )}
      <h1 className="mx-2 text-center text-4xl font-semibold sm:text-6xl">
        {t('COMING_SOON').toUpperCase()}
      </h1>
      <h2 className="mx-2 text-center text-xl sm:text-2xl">
        {t('UNDER_CONSTRUCTION')}
      </h2>
    </div>
  );
};

export default ComingSoon;
