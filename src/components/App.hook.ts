import { useState } from "react";

export default function useApp(){
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function toggleMenu(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return {
    isMenuOpen,
    toggleMenu,
  };
}