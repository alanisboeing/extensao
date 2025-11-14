import React from "react";
import "./style.css"

export default function Botao({ label, onClick, type = "button" }) {
  return (
    <button className="botao" onClick={onClick} type={type}>
      {label}
    </button>
  );
}
