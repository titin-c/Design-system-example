import { useState } from "react";

export function useAccordion(defaultOpenKey) {
  const [openSection, setOpenSection] = useState(defaultOpenKey);

  const toggleSection = (key) => {
    setOpenSection((prevKey) => (prevKey === key ? null : key));
  };

  return { openSection, toggleSection };
}
