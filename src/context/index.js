import { createContext } from "react";

export const colors = [
  { name: "red", hex: "#f99" },
  { name: "green", hex: "#9f9" },
  { name: "blue", hex: "#99f" },
  { name: "black", hex: "#444" },
  { name: "white", hex: "#fff" },
];

export const ColorContext = createContext(null);
