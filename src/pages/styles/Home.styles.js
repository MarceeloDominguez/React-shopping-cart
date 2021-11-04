import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 0 20px;
  height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  margin-top: 180px;
  margin-bottom: 180px;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #f4f6f6;

  img {
    max-height: 200px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    position: relative;
    bottom: 80px;
  }

  @media screen and (max-width: 768px) {
    img {
      max-height: 140px;
    }
  }

  @media screen and (max-width: 375px) {
    img {
      max-height: 150px;
      bottom: 60px;
    }
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  align-self: center;
  padding: 10px 0;
`;

export const StyleLink = styled(Link)`
  text-decoration: none;
  align-self: center;
  padding: 10px 0;
  color: #ccc;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    color: #ccc;
    opacity: 0.9;
  }
`;

//Primer banner

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f5943e;
  border-radius: 10px;
  height: 250px;

  img {
    max-height: 220px;
    object-fit: contain;
    align-self: center;
  }

  div {
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 500px;
  }
`;

export const TitleBanner = styled.h1`
  color: #fff;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 15px;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Btn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: #000;
  border-radius: 2px;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background: #292a2a;
    transition: 0.2s ease-out;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

//Segundo banner

export const Item = styled.div`
  display: flex;
  height: 350px;
  background: #000;
  border-radius: 10px;

  img {
    object-fit: cover;
    align-self: center;
    width: 100%;
    max-height: 350px;
    border-radius: 10px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  height: 350px;
  border-radius: 10px;

  div {
    background: #f4f6f6;
    width: 100%;
    border-radius: 10px;
    padding: 100px 50px;
    line-height: 60px;
  }

  p {
    font-size: 22px;
    font-weight: bold;
  }

  button {
    padding: 0.1rem 2rem;
    border: none;
    background: #f4f6f6;
    border-radius: 2px;
    color: #000;
    transition: 0.2s ease-out;
    border: solid 2px #ccc;

    &:hover {
      cursor: pointer;
      background: #292a2a;
      transition: 0.2s ease-out;
      color: #fff;
    }
  }
`;

//Tercer Banner
export const ImagePerson = styled.div`
  display: flex;
  height: 600px;
  border-radius: 10px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
  }

  @media screen and (max-width: 375px) {
    height: 500px;
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  height: 600px;
  font-size: 30px;

  div {
    align-items: center;
    align-self: center;
  }

  p {
    margin-top: 20px;
    font-size: 14px;
    color: #ccc;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
    font-size: 20px;

    div {
      text-align: center;
      padding: 0px 110px;
    }
  }

  @media screen and (max-width: 375px) {
    height: 500px;
    margin-top: 0px;

    div {
      padding: 0px 10px;
      justify-content: center;
      align-self: center;
    }

    h1 {
      font-size: 24px;
    }
  }
`;
