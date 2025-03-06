import { useState } from "react";
import { listarCarros, deletarCarro } from "../Services/Api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
  margin: auto;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const CarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CarItem = styled.li`
  background-color: #222;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
`;

const DeleteButton = styled.button`
  background-color: #c30000;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ff0e56;
  }
`;

const LoadButton = styled.button`
  background-color: #008cba;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #005f7a;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: #00eeff;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ListEstructure() {
  const [carros, setCarros] = useState([]);

  const carregarCarros = async () => {
    try {
      const data = await listarCarros();
      console.log("Resposta da API:", data);
      setCarros(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error("Erro ao carregar carros:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletarCarro(id);
      setCarros(carros.filter((car) => car.idCar !== id)); // Atualiza a lista após deletar
    } catch (error) {
      console.error("Erro ao deletar carro:", error);
    }
  };

  return (
    <Container>
      <Title>LISTA DE CARROS</Title>
      <LoadButton onClick={carregarCarros}>Carregar Carros</LoadButton>
      <CarList>
        {carros.map((car) => (
          <CarItem key={car.idCar}>
            <p>
              <strong>Placa:</strong> {car.licensePlate}
            </p>
            <p>
              <strong>Nome do dono:</strong> {car.nameOwner}
            </p>
            <p>
              <strong>Telefone do dono:</strong> {car.ownerCelphone}
            </p>
            <DeleteButton onClick={() => handleDelete(car.idCar)}>
              Deletar
            </DeleteButton>
          </CarItem>
        ))}
      </CarList>
      <StyledLink to="/AddScreen">Voltar</StyledLink>
    </Container>
  );
}
