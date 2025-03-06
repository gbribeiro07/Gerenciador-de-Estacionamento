const API_URL = "http://localhost:3001/Cars";

// Função para cadastrar um carro
export async function cadastrarCarro(licensePlate, nameOwner, ownerCelphone) {
  const response = await fetch(`${API_URL}/Cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ licensePlate, nameOwner, ownerCelphone }),
  });

  return response.json();
}

// Função para listar os carros
export async function listarCarros() {
  const response = await fetch(`${API_URL}/Lista`);
  return response.json();
}

// Função para deletar um carro
export async function deletarCarro(id) {
  const response = await fetch(`${API_URL}/Delete/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
