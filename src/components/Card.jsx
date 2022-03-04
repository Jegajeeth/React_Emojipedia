import React from "react";
import Bigemoji from "./Bigemoji";

export default function Card(probs) {
  return (
    <div className="term">
      <dt>
        <Bigemoji emoji={probs.emoji} />
        <span>{probs.name}</span>
      </dt>
      <dd>{probs.desc}</dd>
    </div>
  );
}
