import styled from "styled-components";
import ListEstructure from "./ListCars";

const ListP = styled.div`
  background-color: white;
  display: flex;
  width: 101.05%;
  height: 100%;
  margin-top: 0;
  margin-left: -8px;
`;

export default function ListPage() {
  return (
    <ListP>
      <ListEstructure />
    </ListP>
  );
}
