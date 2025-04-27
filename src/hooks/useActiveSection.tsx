import { useEffect, useState } from 'react';

export interface SectionIds {
  id: 'home' | 'about' | 'contacts' | 'projects';
  label: 'Home' | 'About' | 'Contact' | 'Projects';
  href: '#home' | '#about' | '#contacts' | '#projects';
}

export function useActiveSection(sections: SectionIds[]) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const sectionIds = sections.map((section) => section.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Special handling for contacts section (last section)
      const contactsSection = document.querySelector('#contacts');
      if (contactsSection) {
        // If contacts section is in view (even partially), prioritize it
        const contactsRect = contactsSection.getBoundingClientRect();
        if (contactsRect.top < windowHeight && contactsRect.bottom > 0) {
          setActiveId('contacts');
          return;
        }
      }

      // Standard section detection for other sections
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;

        const headerOffset = 150;

        if (scrollPosition >= sectionTop - headerOffset) {
          setActiveId(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return activeId;
}
