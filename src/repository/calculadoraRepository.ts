import { useState } from "react";

export default function useCalculos() {
  const [soma, setSoma] = useState<number>(0);

  function somar(n1: number, n2: number) {
    const res = n1 + n2;
    setSoma(res);
  }

  return {
    somar,
    soma
  };
}
