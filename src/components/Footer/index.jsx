import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="container">
      <span className="title">
        <h4>
          {t("footerTitle")}&nbsp;&copy;{t("footerCopy")}
        </h4>
      </span>
    </footer>
  );
};
