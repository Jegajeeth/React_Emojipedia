import React from "react";

export default function Bigemoji(probs) {
  return (
    <p className="emoji" role="img" aria-label="Tense Biceps">
      {probs.emoji}
    </p>
  );
}
