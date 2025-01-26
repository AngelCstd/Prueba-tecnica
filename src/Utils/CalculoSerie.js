import { isPrimo } from "../helpers/helpers.js";

export class CalculoSerie {
  static primo(n) {
    if (n < 0) {
      return 0;
    }
    const primos = [2];
    for (let i = 3; primos.length <= n; i += 2) {
      if (isPrimo(i)) {
        primos.push(i);
      }
    }
    return primos[n];
  }

  static triangular(n) {
    if (n < 0) {
      return 0;
    }
    return n * (n + 1) / 2;
  }

  static fibonacci(n) {
    if (n < 0) {
      return 0;
    }
    let previus = 0, current = 1;
    for (let i = 0; i < n; i++) {
      [previus, current] = [current, previus + current];
    }
    return current;
  }

  static serie(n) {
    return 2 * this.primo(n - 2) * 3 * this.triangular(n - 2) * 7 * this.fibonacci(n - 1);
  }
}