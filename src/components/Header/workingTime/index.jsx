import React from "react";

export const WorkingTime = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <span>Working Time:</span>

      {isOpen ? (
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          --OPEN--
        </span>
      ) : (
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          --CLOSED--
        </span>
      )}
    </>
  );
};
