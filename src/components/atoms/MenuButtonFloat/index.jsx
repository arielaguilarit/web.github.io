import { useEffect, useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Menu, MenuButton, MenuItem } from "./styles";

const MenuButtonFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) return;

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      <MenuButton
        type="button"
        aria-label="Abrir navegación"
        aria-expanded={isVisible}
        onClick={toggleMenu}
      >
        <CgMenuGridO size={20} />
      </MenuButton>

      {isVisible && (
        <Menu ref={menuRef} aria-label="Navegación principal">
          <MenuItem href="#about" onClick={closeMenu}>Perfil</MenuItem>
          <MenuItem href="#leadership" onClick={closeMenu}>
            Enfoque Tech Lead
          </MenuItem>
          <MenuItem href="#skills" onClick={closeMenu}>Capacidades</MenuItem>
          <MenuItem href="#projects" onClick={closeMenu}>
            Casos de arquitectura
          </MenuItem>
          <MenuItem href="#experience" onClick={closeMenu}>
            Experiencia enterprise
          </MenuItem>
          <MenuItem href="#contact" onClick={closeMenu}>Contacto</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default MenuButtonFloat;
