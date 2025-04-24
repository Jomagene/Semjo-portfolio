import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { socialLinks } from '@/data/contacts';
const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="relative -z-9 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative -z-9">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">
            &copy; {year}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:hidden">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 cursor-pointer group">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4 transition-all group-hover:rotate-45 group-hover:translate-x-2" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
