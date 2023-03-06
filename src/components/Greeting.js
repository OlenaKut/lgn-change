import { useTranslation } from "react-i18next";

const Greeting = () => {
  const { t } = useTranslation();

  return <h1>{t("greeting")}</h1>;
};

export default Greeting;
