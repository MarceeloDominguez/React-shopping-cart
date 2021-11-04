import React from "react";
import {
  Container,
  Content,
  Description,
  H1,
  Items,
  Title,
  Btn,
} from "./Container.styles";

export const NavbarContainer = () => {
  return (
    <Container>
      <Content>
        <Items>
          <H1>NEW PRODUCTS</H1>
          <Title>XX99 MARK II HEADPHONES</Title>
          <Description>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Description>
          <Btn>SEE PRODUCT</Btn>
        </Items>
      </Content>
    </Container>
  );
};
