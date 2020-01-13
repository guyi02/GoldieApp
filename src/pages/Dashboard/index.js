import React, { Component } from 'react';

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
import ListCard from '~/components/ListCard';
import LoadingComponent from '~/components/LoadingComponent';

class Dashboard extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
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
        name: 'Aprovar devolução',
      },
    ],
    loading: false,
    data: [],
  };

  async UNSAFE_componentWillMount() {
    this.props.setListRequest();
  }

  handleTab = tab => {
    this.setState({ tabSelected: tab });
  };

  redirect = param => {
    const { push } = this.props.navigation;
    push('OrderDetail', { data: param });
  };

  render() {
    return this.state.loading ? (
      <LoadingComponent />
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

        {this.props.clientList && (
          <Content>
            {this.state.tabSelected === 1
              ? this.props.clientList.map(
                  ({ name, background, price_list }) => (
                    <ListCard
                      bg={background}
                      data={price_list}
                      handleClick={param => this.redirect(param)}
                      clientName={name}
                    />
                  )
                )
              : this.state.tabSelected === 2
              ? this.props.clientList.map(
                  ({ name, background, pickup_list }) => (
                    <ListCard
                      data={pickup_list}
                      handleClick={param => this.redirect(param)}
                      clientName={name}
                      bg={background}
                    />
                  )
                )
              : this.state.tabSelected === 3
              ? this.props.clientList.map(
                  ({ name, background, return_list }) => (
                    <ListCard
                      data={return_list}
                      handleClick={param => this.redirect(param)}
                      clientName={name}
                      bg={background}
                    />
                  )
                )
              : this.props.clientList.map(
                  ({ name, background, return_aprove_list }) => (
                    <ListCard
                      data={return_aprove_list}
                      handleClick={param => this.redirect(param)}
                      clientName={name}
                      bg={background}
                    />
                  )
                )}
          </Content>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

const mapStateToProps = state => ({
  clientList: state.List.empresas,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
