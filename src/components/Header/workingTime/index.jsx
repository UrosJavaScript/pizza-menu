import React from "react";
import { useTranslation } from "react-i18next";

export const WorkingTime = () => {
  const { t } = useTranslation();
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
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
