import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Arrow from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => (
  <div className="py-32">
    <div className="container">
      <div className="flex flex-col items-center">
        <Image
          src={memojiImage}
          alt="Person peeking from behind laptop"
          className="size-[100px]"
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>
      <h1>Building Exceptional User Experiences</h1>
      <p>
        I specialize in transforming designs into functional, hight-performing
        web applications. Let's discuss your next project.
      </p>
      <div>
        <button>
          <span>Explore my work</span>
          <ArrowDown />
        </button>
        <button>
          <span>👋</span>
          <span>Let's connect</span>
        </button>
      </div>
    </div>
  </div>
);
