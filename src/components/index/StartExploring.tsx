import { IoChevronDown } from "react-icons/io5";
import { Container } from "@components/commons/Container";

export function StartExploring() {
  return (
    <Container className="flex justify-center md:mt-0 mt-9">
      <a href="#statistics_display">
        <button className="flex flex-col items-center gap-y-[17px]">
          <div className="text-sm text-dark-700">Start exploring</div>
          <IoChevronDown />
        </button>
      </a>
    </Container>
  );
}
