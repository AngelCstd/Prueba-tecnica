import { expect, describe, test } from "vitest";
import { CalculoSerie } from "./CalculoSerie.js";

describe("CalculoSerie", () => {
  test("Se debe obtener el numero de la formula que contiene los valores de las 3 series, si no se encuentra alguno de los numeros retornara 0", () => {
    expect(CalculoSerie.serie(0)).toBe(2 * 0 * 3 * 0 * 7 * 0);
    expect(CalculoSerie.serie(1)).toBe(2 * 0 * 3 * 0 * 7 * 1);
    expect(CalculoSerie.serie(2)).toBe(2 * 2 * 3 * 0 * 7 * 1);
    expect(CalculoSerie.serie(3)).toBe(2 * 3 * 3 * 1 * 7 * 2);
    expect(CalculoSerie.serie(4)).toBe(2 * 5 * 3 * 3 * 7 * 3);
    expect(CalculoSerie.serie(5)).toBe(2 * 7 * 3 * 6 * 7 * 5);
    expect(CalculoSerie.serie(6)).toBe(2 * 11 * 3 * 10 * 7 * 8);
    expect(CalculoSerie.serie(7)).toBe(2 * 13 * 3 * 15 * 7 * 13);
    expect(CalculoSerie.serie(8)).toBe(2 * 17 * 3 * 21 * 7 * 21);
    expect(CalculoSerie.serie(9)).toBe(2 * 19 * 3 * 28 * 7 * 34);
  })
});