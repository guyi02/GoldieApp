import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import CardDetail from '~/components/CardDetail';
import LoadingComponent from '~/components/LoadingComponent';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { Container } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListActions from '~/store/ducks/List/getList';

const OrderDetail = ({ navigation, setListRequest }) => {
  const [data, setData] = useState(null);
  const [credential, setCredential] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataParam = navigation.getParam('data');

    setData(dataParam);
    getInfos();
    return () => setListRequest();
  }, []);

  const getInfos = async () => {
    let credStorage = await AsyncStorage.getItem('@user:credentials');
    const credential = JSON.parse(credStorage);
    setCredential(credential);
    let userStorage = await AsyncStorage.getItem('@user:user');
    const user = JSON.parse(userStorage);
    setUser(user);
  };

  const handleConfirm = async (data, value) => {
    setLoading(true);
    const { goBack } = navigation;
    if (data.type === 'price_list') {
      const res = await api.post('', {
        opt: 'true_response',
        sign: credential.sign,
        token: user.token,
        category: data.type,
        agreed_price: value,
        code: data.code,
        purchase_code: data.purchase_code,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else if (data.type === 'pickup_list') {
      setLoading(true);
      const res = await api.post('', {
        opt: 'true_response',
        sign: credential.sign,
        token: user.token,
        category: data.type,
        code: data.code,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else if (data.type === 'return_list') {
      setLoading(true);
      const res = await api.post('', {
        opt: 'true_response',
        sign: credential.sign,
        token: user.token,
        category: data.type,
        code: data.code,
        return_purchase_product: data.return_purchase_product,
        product: data.product,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else if (data.type === 'return_aprove_list') {
      setLoading(true);
      const res = await api.post('', {
        opt: 'true_response',
        sign: credential.sign,
        token: user.token,
        category: 'return_list',
        approve: true,
        code: data.code,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else {
      alert('error');
    }
  };

  const handleCancel = async (data, value) => {
    setLoading(true);
    const { goBack } = navigation;
    if (data.type === 'price_list') {
      const res = await api.post('', {
        opt: 'false_response',
        sign: credential.sign,
        token: user.token,
        category: data.type,
        agreed_price: value,
        code: data.code,
        purchase_code: data.purchase_code,
      });

      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else if (data.type === 'pickup_list') {
      setLoading(true);
      const res = await api.post('', {
        opt: 'false_response',
        sign: credential.sign,
        token: user.token,
        category: data.type,
        code: data.code,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else if (data.type === 'return_list') {
      setLoading(true);
      const res = await api.post('', {
        opt: 'false_response',
        sign: credential.sign,
        token: user.token,
        category: data.type,
        code: data.code,
        return_purchase_product: data.return_purchase_product,
        product: data.product,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else if (data.type === 'return_aprove_list') {
      setLoading(true);
      const res = await api.post('', {
        opt: 'false_response',
        sign: credential.sign,
        token: user.token,
        category: 'reproved',
        approve: true,
        code: data.code,
      });
      if (res.status) {
        setLoading(false);
        goBack();
      }
    } else {
      alert('error');
    }
  };

  return loading ? (
    <LoadingComponent />
  ) : (
    <Container>
      <ScrollView>
        {data != null && (
          <CardDetail
            cancel={(param, value) => handleCancel(param, value)}
            confirm={(param, value) => handleConfirm(param, value)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

const mapStateToProps = state => ({
  data: state.List.empresas,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
