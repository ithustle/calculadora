import { useState } from "react";
import useCalculos from "../../../repository/calculadoraRepository";
import CalculadoraPage from "./CalculadoraPage";

export default function Calculadora(): JSX.Element {
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);

  const { somar, soma } = useCalculos();

  function calculaSoma() {
    somar(n1, n2);
  }

  return (
    <>
      <CalculadoraPage
        n1={n1}
        n2={n2}
        resultado={soma}
        onN1={(e) => setN1(Number(e.target.value))}
        onN2={(e) => setN2(Number(e.target.value))}
        onCalcular={calculaSoma}
      />
    </>
  );
}
