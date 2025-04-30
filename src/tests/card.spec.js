import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";
import Card from "../MyComponents/Card";
import App from "../App";
import "@testing-library/jest-dom";

// TESTE 1

describe("card", () => {
  test("Render do Card sem informação", () => {
    render(<Card />);

    expect(screen.getByText("Nome: não informado")).toBeInTheDocument();
    expect(screen.getByText("Apartamento: não informado")).toBeInTheDocument();
    expect(screen.getByText("Desempregado")).toBeInTheDocument();
  });
});

///////////////////////////////////////////////////

//Simulação API

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: "User 1", address: { suite: "Apt. 1" }, statusEmprego: true },
        { name: "User 2", address: { suite: "Apt. 2" }, statusEmprego: false },
        { name: "User 3", address: { suite: "Apt. 3" }, statusEmprego: false },
      ]),
  })
);

describe("App", () => {
  // TESTE 2

  test("Verifica chamada API", async () => {
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

  // TESTE 3  Simulação erro na API para exibir loading

  test("Simulação erro na API", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/Carregando.../i)).toBeInTheDocument();
    });
  });

  //teste 4
  
  test("Atualizar valores dos inputs corretamente", () => {
    render(<App />);

    const nomeInput = screen.getByPlaceholderText("Nome");
    const apartamentoInput = screen.getByPlaceholderText("Apartamento");
    const empregadoCheckbox = screen.getByLabelText("Empregado");

   
    fireEvent.change(nomeInput, { target: { value: "João" } });
    fireEvent.change(apartamentoInput, { target: { value: "Apt. 101" } });
    fireEvent.click(empregadoCheckbox); // Marca o checkbox

    
    expect(nomeInput.value).toBe("João");
    expect(apartamentoInput.value).toBe("Apt. 101");
    expect(empregadoCheckbox.checked).toBe(true);
  });

  //Teste 5
  
  test("Limpar os inputs após adicionar um usuário", async () => {
    render(<App />);

    const nomeInput = screen.getByPlaceholderText("Nome");
    const apartamentoInput = screen.getByPlaceholderText("Apartamento");
    const empregadoCheckbox = screen.getByLabelText("Empregado");
    const adicionarButton = screen.getByText("Adicionar Usuário");
  
    fireEvent.change(nomeInput, { target: { value: "Carlos" } });
    fireEvent.change(apartamentoInput, { target: { value: "Apt. 303" } });
    fireEvent.click(empregadoCheckbox); 
    fireEvent.click(adicionarButton); 
  
    expect(nomeInput.value).toBe("");
    expect(apartamentoInput.value).toBe("");
    expect(empregadoCheckbox.checked).toBe(false);
  });
});
