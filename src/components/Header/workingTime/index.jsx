import React from "react";
import { useTranslation } from "react-i18next";

export const WorkingTime = ({ hour, openHour, closeHour }) => {
  const { t } = useTranslation();

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <span>{t("workTimeTitle")}</span>

      {isOpen ? (
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {t("workOpen")}
        </span>
      ) : (
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {t("workClose")}
        </span>
      )}
    </>
  );
};
