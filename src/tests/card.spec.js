import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Card from "../MyComponents/Card";
import App from "../App";
import "@testing-library/jest-dom";

// TESTE 1

describe("card", () => {
  it("Render do Card está correta", () => {
    render(<Card />);

    expect(screen.getByText("Nome: não informado")).toBeInTheDocument();
    expect(screen.getByText("Apartamento: não informado")).toBeInTheDocument();
    expect(screen.getByText("Desempregado")).toBeInTheDocument();
  });
});

///////////////////////////////////////////////////
// TESTE 2


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: "User 1", address: { suite: "Apt. 1" } },
        { name: "User 2", address: { suite: "Apt. 2" } },
        { name: "User 3", address: { suite: "Apt. 3" } },
      ]),
  })
);

describe("App", () => {

  test("fetches and renders user data", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Nome: User 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Apartamento: Apt. 1/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Nome: User 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartamento: Apt. 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Nome: User 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartamento: Apt. 3/i)).toBeInTheDocument();
  });

  test("handles fetch errors gracefully", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject("API is down")
    );
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/Carregando.../i)).toBeInTheDocument();
    });
  });
});
