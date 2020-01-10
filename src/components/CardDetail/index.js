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
  ActionsArea,
  ConfirmButton,
  ConfirmButtonIcon,
  CancelButton,
  CancelButtonIcon,
} from './styles';

const Card = ({ data, cancel, confirm }) => {
  return (
    <Container>
      <Header>
        <Identifier># {data.numero_pedido}</Identifier>
        <Client>{data.customer_name}</Client>
      </Header>
      <Body>
        <RowCredential>
          <IconCredential />
          <Credential>{data.seller_name}</Credential>
        </RowCredential>
        <RowUser>
          <IconUser />
          <UserText>{data.created_at}</UserText>
        </RowUser>

        <RowProduct>
          <QtdContainer>
            <QtdText>{data.volume}</QtdText>
          </QtdContainer>
          <Product>{data.product_name}</Product>
        </RowProduct>
      </Body>
      <Footer>
        {/* <TabArea>
          <TabText>Tabela: Tab 1</TabText>
          <RowSku>
            <Sku># {item.sku}</Sku>
          </RowSku>
        </TabArea> */}
        <ValuesArea>
          <ValuesHeader>Valores</ValuesHeader>
          <RowValues>
            <ValueText>Unitário:</ValueText>
            <Value>R$ {data.price}</Value>
          </RowValues>
          <RowValues>
            <ValueText>Total:</ValueText>
            <Value>R$ {data.amount}</Value>
          </RowValues>
          <RowValues>
            <ValueText>Solicitação:</ValueText>
            <Value>R$ {data.price_request}</Value>
          </RowValues>
        </ValuesArea>
        <ActionsArea>
          <ConfirmButton onPress={() => confirm(data)}>
            <ConfirmButtonIcon />
          </ConfirmButton>

          <CancelButton onPress={() => cancel(data)}>
            <CancelButtonIcon />
          </CancelButton>
        </ActionsArea>
      </Footer>
    </Container>
  );
};

export default Card;
