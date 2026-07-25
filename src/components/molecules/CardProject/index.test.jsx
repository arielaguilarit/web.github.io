import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CardProject from "./index";

describe("CardProject", () => {
  const project = {
    nameProject: "Portfolio personal",
    description: "Sitio para mostrar experiencia profesional.",
    stack: ["React", "Vite"],
    src: "https://example.com/project.png",
    alt: "Vista del portfolio",
    status: "Caso profesional anonimizado",
  };

  it("muestra los datos del proyecto y sus acciones", () => {
    render(<CardProject {...project} />);

    expect(screen.getByRole("heading", { name: project.nameProject })).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText("React / Vite")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: project.alt })).toHaveAttribute("src", project.src);
    expect(screen.getByText(project.status)).toBeInTheDocument();
  });

  it("permite renderizar un proyecto sin tecnologías", () => {
    render(<CardProject {...project} stack={[]} />);

    expect(screen.getByText(project.nameProject)).toBeInTheDocument();
  });
});
