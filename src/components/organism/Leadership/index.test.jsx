import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Leadership from "./index";

describe("Leadership", () => {
  it("expone los principios de liderazgo técnico", () => {
    render(<Leadership />);

    expect(
      screen.getByRole("heading", { name: "Mi enfoque" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(6);
    expect(screen.getByText("Leer el sistema y sus restricciones")).toBeInTheDocument();
  });
});
