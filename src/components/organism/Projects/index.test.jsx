import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "./index";
import projects from "./projects";

describe("Projects", () => {
  it("renderiza el título y una tarjeta por cada proyecto", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: "Casos de arquitectura" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
    expect(screen.getByRole("heading", { name: projects[0].nameProject })).toBeInTheDocument();
  });
});
