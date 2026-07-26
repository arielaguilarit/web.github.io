import { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Menu, MenuButton, MenuItem } from "./styles";

const MenuButtonFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return undefined;

    const closeOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setIsVisible(false);
    };

    document.addEventListener("mousedown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("mousedown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [isVisible]);

  const closeMenu = () => setIsVisible(false);

  return (
    <>
      <MenuButton
        type="button"
        aria-label={`${isVisible ? "Cerrar" : "Abrir"} navegación`}
        aria-controls="main-navigation"
        aria-expanded={isVisible}
        onClick={() => setIsVisible((visible) => !visible)}
      >
        <CgMenuGridO size={20} aria-hidden="true" />
      </MenuButton>

      {isVisible && (
        <Menu
          as="nav"
          id="main-navigation"
          ref={menuRef}
          aria-label="Navegación principal"
        >
          <MenuItem href="#about" onClick={closeMenu}>Presentación</MenuItem>
          <MenuItem href="#leadership" onClick={closeMenu}>Mi enfoque</MenuItem>
          <MenuItem href="#contribution" onClick={closeMenu}>En qué puedo aportar</MenuItem>
          <MenuItem href="#principles" onClick={closeMenu}>Principios</MenuItem>
          <MenuItem href="#career" onClick={closeMenu}>Evolución profesional</MenuItem>
          <MenuItem href="#case-study" onClick={closeMenu}>Caso destacado</MenuItem>
          <MenuItem href="#skills" onClick={closeMenu}>Capacidades técnicas</MenuItem>
          <MenuItem href="#conversation" onClick={closeMenu}>Conversemos</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default MenuButtonFloat;
