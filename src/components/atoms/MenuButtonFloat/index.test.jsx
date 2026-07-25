import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MenuButtonFloat from "./index";

describe("MenuButtonFloat", () => {
  it("abre el menú y lo cierra al hacer clic fuera", () => {
    render(<MenuButtonFloat />);
    const trigger = screen.getByRole("button", { name: "Abrir navegación" });

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Perfil")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("Perfil")).not.toBeInTheDocument();
  });

  it("usa etiquetas alineadas con las secciones y se cierra al navegar", () => {
    render(<MenuButtonFloat />);

    fireEvent.click(screen.getByRole("button", { name: "Abrir navegación" }));
    const link = screen.getByRole("link", { name: "Casos de arquitectura" });

    expect(link).toHaveAttribute("href", "#projects");
    fireEvent.click(link);
    expect(screen.queryByRole("link", { name: "Casos de arquitectura" })).not.toBeInTheDocument();
  });
});
