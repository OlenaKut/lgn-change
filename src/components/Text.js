import { useTranslation } from "react-i18next";

const Text = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("text")}</h1>
      <p>{t("news")}</p>
    </div>
  );
};

export default Text;
