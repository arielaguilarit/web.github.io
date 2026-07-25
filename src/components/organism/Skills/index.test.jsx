import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skills from "./index";

describe("Skills", () => {
  it("presenta las capacidades técnicas agrupadas", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", {
        name: "Capacidades para sistemas que deben escalar",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(5);
    expect(screen.getByText("Arquitectura y liderazgo")).toBeInTheDocument();
    expect(screen.getByText("AI Engineering")).toBeInTheDocument();
  });
});
