import React, { Component } from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {
  Container,
  HeaderArea,
  RowHeader,
  HeaderTitle,
  LogoImage,
  RowItems,
  ButtonTab,
  TextBtnTab,
  Content,
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListActions from '~/store/ducks/List/getList';
import assets from '~/services/imagesImport';
import api from '~/services/api';
import ListCard from '~/components/ListCard';

class Dashboard extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    credentials: null,
    tabSelected: 1,
    btn: [
      {
        id: 1,
        name: 'Preços',
      },
      {
        id: 2,
        name: 'Retiradas',
      },
      {
        id: 3,
        name: 'Devoluções',
      },
      {
        id: 4,
        name: 'Aprovadas',
      },
    ],
    loading: false,
    data: null,
  };

    async UNSAFE_componentWillMount() {
        this.props.setListRequest()
    }

  handleTab = tab => {
    this.setState({ tabSelected: tab });
  };

  redirect = data => {
    const { push } = this.props.navigation;
    push('OrderDetail', { data });
  };

  render() {
      console.tron.log(this.props.data);

    return this.state.loading ? (
      <Container>
        <ActivityIndicator />
      </Container>
    ) : (
      <Container>
        <HeaderArea>
          <RowHeader>
            <LogoImage resizeMode="contain" source={assets.logoOpacity} />
            <HeaderTitle>Solicitações</HeaderTitle>
          </RowHeader>
          <RowItems horizontal showsHorizontalScrollIndicator={false}>
            {this.state.btn.map(bt => (
              <ButtonTab
                onPress={() => this.handleTab(bt.id)}
                active={this.state.tabSelected === bt.id ? true : false}
              >
                <TextBtnTab
                  active={this.state.tabSelected === bt.id ? true : false}
                >
                  {bt.name}
                </TextBtnTab>
              </ButtonTab>
            ))}
          </RowItems>
        </HeaderArea>

        {this.props.data && (
          <Content>
            {this.state.tabSelected === 1
              ? this.props.data.map(({ name, price_list }) => (
                  <ListCard
                    data={price_list}
                    handleClick={param => this.redirect(param)}
                    clientName={name}
                  />
                ))
              : this.state.tabSelected === 2
              ? this.props.data.map(({ name, pickup_list }) => (
                  <ListCard
                    data={pickup_list}
                    handleClick={param => this.redirect(param)}
                    clientName={name}
                  />
                ))
              : this.state.tabSelected === 3
              ? this.props.data.map(({ name, return_list }) => (
                  <ListCard
                    data={return_list}
                    handleClick={param => this.redirect(param)}
                    clientName={name}
                  />
                ))
              : this.props.data.map(({ name, return_aprove_list }) => (
                  <ListCard
                    data={return_aprove_list}
                    handleClick={param => this.redirect(param)}
                    clientName={name}
                  />
                ))}
          </Content>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

const mapStateToProps = state => ({
  data: state.List.empresas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
