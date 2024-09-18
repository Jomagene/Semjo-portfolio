import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  { title: "Github", href: "https://github.com/Jomagene" },
  { title: "Twitter", href: "https://x.com/jomagene" },
  {
    title: "Frontendmentor",
    href: "https://www.frontendmentor.io/profile/Jomagene",
  },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/jo%C3%ABl-magene/" },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div>&copy; 2024. All rights reserved.</div>
          <nav>
            {footerLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <span>{link.title}</span>
                <ArrowUpRightIcon />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
