import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Accordion from "./index";

describe("Accordion", () => {
  const experience = {
    title: "Arquitectura frontend",
    description: "Construye interfaces accesibles.",
    highlights: ["Componentes reutilizables"],
  };

  it("alterna el indicador al abrir y cerrar el contenido", () => {
    render(<Accordion {...experience} />);
    const header = screen.getByRole("button", { name: /Arquitectura frontend/ });

    expect(screen.getByText("+")).toBeInTheDocument();
    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("-")).toBeInTheDocument();
    fireEvent.click(header);
    expect(header).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("+")).toBeInTheDocument();
  });
});
