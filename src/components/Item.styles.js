import styled from "styled-components";

export const Wrapper = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    object-fit: contain;
  }

  @media screen and (max-width: 375px) {
    height: 100%;
  }
`;

export const ContainerPrice = styled.div`
  flex: 2;
  height: 100%;
`;

export const ContainerTitle = styled.div`
  height: 200px;
`;
