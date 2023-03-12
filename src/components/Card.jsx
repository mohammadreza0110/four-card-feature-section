import React from "react";

export default function Card({ borderColor, title, image }) {
  return (
    <div
      className={`${borderColor} cards lg:w-[350px] h-[222px] lg:h-[250px] relative text-left pb-7 bg-white rounded-lg`}
    >
      <div className="px-7">
        <header className="font-semibold pt-7 text-xl pb-1 lg:pb-2">
          {title}
        </header>

        <p className="text-[13px] opacity-50">
          Scans our talent network to create the optimal team for your project
        </p>

        <img
          className="w-[57px] lg:w-16 absolute bottom-[13%] right-[10%]"
          src={image}
        />
      </div>
    </div>
  );
}
