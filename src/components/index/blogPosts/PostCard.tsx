import Image from "next/image";
import testBg from "./test-post.png";

export default function ProjectCard() {
  return (
    <section
      className="w-full md:max-w-[324px] lg:max-w-[384px] flex flex-col"
      data-testid="card-test"
    >
      <section
        className="w-full min-h-[180px] bg-light-50 bg-cover bg-center flex flex-col justify-end"
        // data-testid={`card_title_${project.title[0]?.text}`}
      >
        <section className="text-start">
          <Image src={testBg} alt="test image" />
          <div className="flex lg:text-lg lg:leading-6 lg:mt-10 text-dark-500 font-semibold">
            <div>11 days ago</div>
            <span className="px-1">•</span>
            <div>1 min read</div>
          </div>
          <div className="lg:text-xl lg:tracking-[.01em] lg:mt-1 text-dark-1000 font-semibold">
            Step-by-step guide to setting up an Ocean API
          </div>
        </section>
      </section>
    </section>
  );
}
