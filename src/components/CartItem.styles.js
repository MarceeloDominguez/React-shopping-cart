import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  border: 0.5px solid lightgray;
  padding: 5px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const ProductDetails = styled.div`
  flex: 6;
  display: flex;

  img {
    object-fit: contain;
    width: 200px;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 10px;
  border: 0.5px solid lightgray;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
  }
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductAmount = styled.div`
  font-size: 18px;
  margin: 5px;

  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 200;
`;
