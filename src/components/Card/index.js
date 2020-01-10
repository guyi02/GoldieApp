import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  Header,
  RowIdentifier,
  Identifier,
  Client,
  Body,
  RowCredential,
  IconCredential,
  Credential,
  RowUser,
  IconUser,
  UserText,
  RowProduct,
  Product,
  QtdContainer,
  QtdText,
  Footer,
  TabArea,
  RowTab,
  TabText,
  RowSku,
  Sku,
  ValuesArea,
  ValuesHeader,
  RowValues,
  ValueText,
  Value,
  IconArrow,
} from './styles';

const Card = ({ item, handleClick }) => {
  return (
    <Container
      style={{
        elevation: 2,
      }}
      activeOpacity={0.6}
      onPress={() => handleClick(item)}
    >
      <Header>
        <Client>{item.customer_name}</Client>
      </Header>
      <Body>
        <RowProduct>
          <QtdContainer>
            <QtdText>{item.volume}</QtdText>
          </QtdContainer>
          <Product>{item.product_name}</Product>
        </RowProduct>
      </Body>
      <Footer>
        <RowValues>
          <ValueText>Solicitação:</ValueText>
          <Value>R$ {item.price_request}</Value>
        </RowValues>
      </Footer>
      <View
        style={{
          position: 'absolute',
          right: 3,
          top: '45%',
        }}
      >
        <IconArrow />
      </View>
    </Container>
  );
};

export default Card;
