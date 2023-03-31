import Image from "next/image";
import testBg from "./test-post.png";

export default function ProjectCard() {
  return (
    <section
      className="w-full md:max-w-[300px] lg:max-w-[318px] flex flex-col"
      data-testid="card-test"
    >
      <section
        className="w-full min-h-[180px] bg-light-50 bg-cover bg-center flex flex-col justify-end"
        // data-testid={`card_title_${project.title[0]?.text}`}
      >
        <section className="text-start">
          <Image src={testBg} alt="test image" />
          <div className="text-dark-1000 font-semibold px-3 lg:text-lg lg:leading-6 lg:mt-6">
            Step-by-step guide to setting up an Ocean API
          </div>
        </section>
      </section>
    </section>
  );
}
