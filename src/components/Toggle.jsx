import React from "react";

export default function Toggle() {
  return (
    <label
      for="small-toggle"
      class="inline-flex relative items-center cursor-pointer"
    >
      <input type="checkbox" value="" id="small-toggle" class="sr-only peer" />
      <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
}
