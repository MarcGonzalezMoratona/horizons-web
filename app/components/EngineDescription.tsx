import useTranslation from 'next-translate/useTranslation';

const EngineDescription = () => {
  const { t } = useTranslation('common');
  return (
    <div className="my-8 flex w-5/6 flex-col gap-6 text-center sm:w-2/3 lg:w-1/3">
      <h2 className="text-center text-2xl sm:text-4xl">
        {t('ENGINE_DESCRIPTION_TITLE')}
      </h2>
      <p className="leading-loose sm:text-lg">{t('ENGINE_DESCRIPTION')}</p>
    </div>
  );
};

export default EngineDescription;
