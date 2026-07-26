import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skills from "./index";

describe("Skills", () => {
  it("presenta las capacidades técnicas agrupadas", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", {
        name: "Capacidades técnicas",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(4);
    expect(screen.getByText("Arquitectura")).toBeInTheDocument();
    expect(screen.getByText("AI Engineering")).toBeInTheDocument();
  });
});
