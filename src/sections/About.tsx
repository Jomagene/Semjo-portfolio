import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

export const AboutSection = () => {
  return (
    <div className="bp-96 container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into my world"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My reads</h3>
            <p>Explpore the book shaping my perspectives. </p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My toolbox</h3>
            <p>
              Explpore the technologies and tools used to craft the digital
              experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((tool) => (
              <div key={tool.title}>
                <span>
                  <TechIcon component={tool.iconType} />
                </span>
                <span>{tool.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
