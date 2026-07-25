import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Leadership from "./index";

describe("Leadership", () => {
  it("expone los principios de liderazgo técnico", () => {
    render(<Leadership />);

    expect(
      screen.getByRole("heading", { name: "Mi enfoque como Tech Lead" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(3);
    expect(screen.getByText("Decisiones que escalan")).toBeInTheDocument();
  });
});
