import { useEffect, useState } from 'react';

export interface SectionIds {
  id: 'home' | 'about' | 'contacts' | 'projects';
  label: 'Home' | 'About' | 'Contact' | 'Projects';
  href: '#home' | '#about' | '#contacts' | '#projects';
}

export function useActiveSection(sectionIds: SectionIds[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds
        .map((sectionId) => document.getElementById(sectionId.id))
        .filter((section) => section !== null) as HTMLElement[];

      if (sections.length === 0) return;
      const scrollPosition = window.scrollY + offset;
      let currentSection = sections[0];

      for (const section of sections) {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = section;
        } else {
          break;
        }
      }

      setActiveId(currentSection.id);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
