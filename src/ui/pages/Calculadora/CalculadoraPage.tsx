type CalculadoraProps = {
  n1: number;
  n2: number;
  resultado: number;
  onCalcular: () => void;
  onN1: (n1: React.ChangeEvent<HTMLInputElement>) => void;
  onN2: (n2: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CalculadoraPage(props: CalculadoraProps): JSX.Element {
  const { n1, n2, onN1, onN2, resultado, onCalcular } = props;
  return (
    <div>
      <h1>Calculadora Simples</h1>
      <input type="text" value={n1} onChange={onN1} />
      <input type="text" value={n2} onChange={onN2} />
      <br />
      <br />
      <button onClick={onCalcular}>Somar</button>
      <br />
      <h4>Resultado: {resultado}</h4>
    </div>
  );
}
