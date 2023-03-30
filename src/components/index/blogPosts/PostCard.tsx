import Image from "next/image";
import testBg from "./test-post.png";

export default function ProjectCard() {
  return (
    <section className="w-full flex flex-col" data-testid="card-test">
      <section
        className="w-full min-h-[180px] bg-light-50 p-7 bg-cover bg-center flex flex-col justify-end"
        // data-testid={`card_title_${project.title[0]?.text}`}
      >
        <section>
          <Image src={testBg} alt="test image" />
          <div className="flex lg:text-lg lg:leading-6 lg:mt-10 text-dark-500 font-semibold">
            <div>11 days ago</div>
            <span className="px-1">•</span>
            <div>1 min read</div>
          </div>
          <div className="lg:text-xl lg:tracking-[.01em] text-dark-1000 font-semibold">
            Step-by-step guide to setting up an Ocean API
          </div>
        </section>
      </section>
      <section
        className="p-7 flex flex-col space-between flex-grow"
        // data-testid={`card_desc_${project.title[0]?.text}`}
      >
        <h5 className="text-dark-200 flex-grow">project desc</h5>
        {/* {project.github?.url != null && (
          <section className="mt-20">
            <Link
              legacyBehavior
              className="flex items-center"
              href={project.github.url}
            >
              <a
                className="block text-primary-500 font-mono transition hover:text-primary-200 underline cursor-pointer"
                data-testid={`learn_more_${project.title[0]?.text}`}
              >
                Learn More
              </a>
            </Link>
          </section>
        )} */}
      </section>
    </section>
  );
}
