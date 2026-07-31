#!/usr/bin/env node
// Extrae la primera tabla markdown de copy-decisiones.md y la escribe como
// copy-decisiones.csv, para que Google Sheets la consuma vía IMPORTDATA.
// La tabla de origen es la única fuente editable (SSOT); este CSV es una
// vista derivada, regenerada en cada push a main — nunca se edita a mano.

import { readFileSync, writeFileSync } from "node:fs";

const SRC = new URL("../copy-decisiones.md", import.meta.url);
const DEST = new URL("../copy-decisiones.csv", import.meta.url);

const lines = readFileSync(SRC, "utf8").split("\n");
const tableLines = lines.filter((line) => line.trim().startsWith("|"));

if (tableLines.length < 2) {
  throw new Error("No se encontró una tabla markdown en copy-decisiones.md");
}

function parseRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isSeparatorRow(cells) {
  return cells.every((cell) => /^:?-+:?$/.test(cell));
}

function toCsvField(value) {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const rows = tableLines.map(parseRow).filter((cells) => !isSeparatorRow(cells));
const csv = rows.map((cells) => cells.map(toCsvField).join(",")).join("\n") + "\n";

writeFileSync(DEST, csv);
console.log(`Escrito ${DEST.pathname} (${rows.length} filas, incluyendo encabezado)`);
