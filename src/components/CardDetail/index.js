import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

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
  IconEditBtn,
  ActionsArea,
  ConfirmButton,
  ConfirmButtonIcon,
  CancelButton,
  CancelButtonIcon,
  IconEdit,
  InputValue,
} from './styles';

const Card = ({ data, cancel, confirm }) => {
  const [value, setValue] = useState('');
  const [showInput, setShow] = useState(false);
  return (
    <Container
      style={{
        elevation: 2,
      }}
    >
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
            {data.type === 'price_list' && (
              <IconEditBtn onPress={() => setShow(!showInput)}>
                <IconEdit />
              </IconEditBtn>
            )}
          </RowValues>

          {showInput && (
            <InputValue
              placeholder="Digite o novo valor"
              onChangeText={value => setValue(value)}
              value={value}
              keyboardType="number-pad"
            />
          )}
        </ValuesArea>
        <ActionsArea>
          <ConfirmButton onPress={() => confirm(data, value)}>
            <ConfirmButtonIcon />
          </ConfirmButton>

          <CancelButton onPress={() => cancel(data, value)}>
            <CancelButtonIcon />
          </CancelButton>
        </ActionsArea>
      </Footer>
    </Container>
  );
};

export default Card;
