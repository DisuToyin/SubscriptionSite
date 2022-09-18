import React from "react";

export default function Badge({
  badgeText,
  extraStyles = "bg-pink-100 text-pink-800",
}) {
  return (
    <span
      className={`${extraStyles}, text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}
    >
      {badgeText}
    </span>
  );
}
