import linkSharing from "@/assets/images/link-sharing.webp";
import lamanoLandingPage from "@/assets/images/lamano.jpeg";
import cprj from "@/assets/images/cprj.jpeg";
import timbuShop from "@/assets/images/Timbu-shop.jpeg";

const portfolioProjects = [
  {
    company: "CPRJ",
    year: "2024",
    title: "Cprj landing page",
    results: [{ title: "Increase the compagny visibility" }],
    link: "https://jomagene.github.io/cprj/",
    image: cprj,
  },
  {
    company: "lamano-drc",
    year: "2024",
    title: "Lamano Landing Page",
    results: [
      { title: "Increase the compagny visibility and online audience" },
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
    <div>
      <div className="container">
        <p>Real-world Projects</p>
        <h2>Featured Projects</h2>
        <p>See how I transformed concepts into engaging digital experiences.</p>
        <div></div>
      </div>
    </div>
  );
};
