import Image from "next/image";
import QuantumIcon from "./quantum.png";
import QuantumIconHover from "./quantum-hover.png";

interface QuantumProps {
  id: string;
  className?: string;
}
export function Quantum(props: QuantumProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image src={QuantumIcon} alt="Quantum Icon" id={id} className={className} />
  );
}

export function QuantumHover(props: QuantumProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={QuantumIconHover}
      alt="Quantum Icon"
      id={id}
      className={className}
    />
  );
}
