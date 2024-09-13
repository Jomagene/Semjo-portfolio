import linkSharing from "@/assets/images/link-sharing.webp";
import lamanoLandingPage from "@/assets/images/lamano.jpeg";
import cprj from "@/assets/images/cprj.jpeg";
import timbuShop from "@/assets/images/Timbu-shop.jpeg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "CPRJ",
    year: "2024",
    title: "Cprj landing page",
    results: [
      { title: "Increase the compagny visibility" },
      { title: "Increase the compagny audience" },
    ],
    link: "https://jomagene.github.io/cprj/",
    image: cprj,
  },
  {
    company: "lamano-drc",
    year: "2024",
    title: "Lamano Landing Page",
    results: [
      { title: "Increase the compagny visibility and online audience" },
      { title: "Increase the compagny professionalism and digitalization" },
    ],
    link: "https://lamano.vercel.app/",
    image: lamanoLandingPage,
  },
  {
    company: "HNG internship",
    year: "2024",
    title: "Timbu shop",
    results: [
      { title: "Improved my react skills" },
      { title: "Show case large project handling and team player capacity" },
    ],
    link: "https://timbu-cloud-shop-snowy.vercel.app/",
    image: timbuShop,
  },
  {
    company: "HNG internship",
    year: "2024",
    title: "Link sharing app",
    results: [
      { title: "Improved my next.js skills" },
      { title: "Improved typescript skills" },
      { title: "Increase my code stucture and readability" },
    ],
    link: "https://link-sharing-app-xene.vercel.app/",
    image: linkSharing,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-fit px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
