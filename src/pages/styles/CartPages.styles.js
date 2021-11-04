import styled from "styled-components";

//@Summary
export const Summary = styled.div`
  //flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;

  button {
    width: 100%;
    padding: 10px;
    background-color: #f5943e;
    color: white;
    font-weight: 600;
    outline: none;
    border: none;
    transition: 0.2s ease-out;
    border-radius: 2px;
    margin: 10px 0px;

    &:hover {
      cursor: pointer;
      background: #fca252;
      transition: 0.2s ease-out;
      color: #fff;
    }
  }
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
