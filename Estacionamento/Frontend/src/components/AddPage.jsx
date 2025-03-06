import styled from "styled-components";
import AddForm from "./AddCars";

const AddP = styled.div`
  background-color: white;
  display: flex;
  width: 101.05%;
  height: 100%;
  margin-top: 0;
  margin-left: -8px;
`;

export default function AddPage() {
  return (
    <AddP>
      <AddForm />
    </AddP>
  );
}
