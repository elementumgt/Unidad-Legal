import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);
  const signature = ids.join("|");

  useEffect(() => {
    const sectionIds = signature.split("|").filter(Boolean);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveId(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [signature]);

  return activeId;
}
