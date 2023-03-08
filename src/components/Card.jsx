import React from "react";

export default function Card(props) {
  return (
    <section
      className={`${props.borderColor} cards-shadow w-[350px] h-[250px] relative text-left p-8 bg-white rounded-lg border-t-4`}
    >
      <header className="font-semibold text-xl pb-2">{props.title}</header>

      <p className="text-[13px] opacity-50">
        Scans our talent network to create the optimal team for your project
      </p>

      <img
        className="absolute bottom-[13%] right-[10%]"
        src={props.image}
        width="64"
      />
    </section>
  );
}
