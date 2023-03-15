import useTranslation from "next-translate/useTranslation";
import { Horizons } from "./Horizons";

const ComingSoon = () => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-12">
      <Horizons className="h-32 w-32" />
      <h1 className="text-4xl sm:text-6xl font-semibold text-center mx-2">
        {t("COMING_SOON").toUpperCase()}
      </h1>
      <h2 className="text-xl sm:text-2xl text-center mx-2">
        {t("UNDER_CONSTRUCTION")}
      </h2>
    </div>
  );
};

export default ComingSoon;
