import styled from "styled-components";
import { useState } from "react";
import { cadastrarCarro } from "../Services/Api";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  background-color: #000000;
  padding: 70px;
  border-radius: 10px;
  width: 600px;
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
  margin: auto;
  margin-top: 100px;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0 5px;
  font-weight: bold;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #d3d3d3;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  display: block;
  width: 250px;
  height: 40px;
  margin-top: 50px;
  margin-bottom: -10px;
  margin-left: 180px;
  padding: 10px;
  background-color: #00cc66;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #00994d;
  }
`;

const ToListLink = styled.p`
  margin-top: 70px;
  margin-bottom: -10px;
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #00eeff;
  font-weight: bold;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export default function AddForm() {
  //estados para armazenar os valores dos Inputs
  const [licensePlate, setLicensePlate] = useState("");
  const [nameOwner, setNameOwner] = useState("");
  const [ownerCelphone, setOwnerCelphone] = useState("");
  const [message, setMessage] = useState("");

  //esta função será chamada assim que o formulário for enviado
  const handleSubmit = async (event) => {
    event.preventDefault(); //evita que a página recarregue

    if (!licensePlate || !nameOwner || !ownerCelphone) {
      setMessage("Preencha todos os campos!");
      return;
    }

    try {
      const response = await cadastrarCarro(
        licensePlate,
        nameOwner,
        ownerCelphone
      );

      if (response.error) {
        setMessage(`Erro: ${response.error}`);
      } else {
        setMessage("Carro cadastrado com sucesso!");
        //limpa os campos do formulário após o cadastro
        setLicensePlate("");
        setNameOwner("");
        setOwnerCelphone("");
      }
    } catch (error) {
      console.error("Erro ao cadastrar carro:", error); // Loga o erro para debug
      setMessage("Erro ao cadastrar carro."); // Mensagem genérica para o usuário
    }
  };

  return (
    <FormContainer>
      <Title>CADASTRAR CARRO</Title>
      <form onSubmit={handleSubmit}>
        <Label>Placa:</Label>
        <Input
          type="text"
          placeholder="Digite a placa"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />

        <Label>Nome do dono:</Label>
        <Input
          type="text"
          placeholder="Digite o nome"
          value={nameOwner}
          onChange={(e) => setNameOwner(e.target.value)}
        />

        <Label>Telefone do dono:</Label>
        <Input
          type="text"
          placeholder="Digite o telefone"
          value={ownerCelphone}
          onChange={(e) => setOwnerCelphone(e.target.value)}
        />

        <SubmitButton type="submit">Pronto!</SubmitButton>
      </form>

      <ToListLink>
        <StyledLink to="/ListCars">Ver lista de carros</StyledLink>
      </ToListLink>

      {message && (
        <p style={{ color: "white", marginTop: "20px" }}>{message}</p>
      )}
    </FormContainer>
  );
}
