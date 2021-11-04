import styled from "styled-components";
import ImgBg from "../../img/header-banner.jpg";

export const Container = styled.div`
  background: url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 20px;
  width: 600px;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    z-index: 1;
  }
`;

export const H1 = styled.h2`
  font-size: 16px;
  letter-spacing: 4px;
  margin-bottom: 30px;
  opacity: 0.3;

  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 70px;

  @media screen and (max-width: 768px) {
    width: 500px;
    text-align: center;
    font-size: 50px;
  }

  @media screen and (max-width: 375px) {
    width: 210px;
    text-align: center;
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 26px;
  line-height: 1.8rem;
  opacity: 0.5;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 500px;
    text-align: center;
    font-size: 25px;
    line-height: 30px;
  }

  @media screen and (max-width: 414px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 375px) {
    /* width: 220px;
    text-align: center;
    font-size: 12px;
    line-height: 1rem; */

    width: 350px;
    text-align: center;
    font-size: 15px;
    line-height: 1rem;
  }
`;

export const Btn = styled.button`
  padding: 1rem 3rem;
  border: none;
  background: #f5943e;
  border-radius: 2px;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background: #fca252;
    transition: 0.2s ease-out;
    color: #fff;
  }
`;
