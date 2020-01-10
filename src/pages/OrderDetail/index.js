import React, { useEffect, useState } from 'react';

import { View, Text, ScrollView } from 'react-native';
import CardDetail from '~/components/CardDetail';
import assets from '~/services/imagesImport';

import { Container, RowHeader, LogoImage, HeaderTitle } from './styles';

const OrderDetail = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataParam = navigation.getParam('data');
    setData(dataParam);
    console.tron.log(dataParam);
  }, []);

  const handleConfirm = () => {
    alert('testee confirm');
  };

  const handleCancel = () => {
    alert('testeee cancel');
  };
  return (
    <Container>
      <ScrollView>
        {data != null && (
          <CardDetail
            cancel={param => handleCancel(param)}
            confirm={param => handleConfirm(param)}
            data={data}
          />
        )}
      </ScrollView>
    </Container>
  );
};

OrderDetail.navigationOptions = () => ({
  title: 'Solicitação',
});

export default OrderDetail;
