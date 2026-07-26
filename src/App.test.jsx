import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "./App";

const renderRoute = (route) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );

describe("rutas editoriales", () => {
  it("muestra la evolución profesional", () => {
    renderRoute("/evolucion-profesional");

    expect(
      screen.getByRole("heading", { name: "Mi evolución profesional", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("ICA Chile")).toBeInTheDocument();
    expect(screen.getByText("Technical Lead")).toBeInTheDocument();
  });

  it("muestra el caso de evolución SPA sin afirmar implementación", () => {
    renderRoute("/casos/evolucion-spa");

    expect(
      screen.getByRole("heading", {
        name: "De múltiples hosts a una experiencia integrada",
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("TODO: incorporar mediciones reales antes y después."),
    ).toBeInTheDocument();
  });
});
