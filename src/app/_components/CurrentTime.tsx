import React from "react";

const CurrentTime = () => {
  return (
    <div className="text-4xl font-bold">
      It&apos;s{" "}
      {new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}{" "}
      at{" "}
      {new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}
    </div>
  );
};

export default CurrentTime;
