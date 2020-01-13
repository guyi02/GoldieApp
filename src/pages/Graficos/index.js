import React, { Component } from 'react';
import {
  Container,
  Content,
  CardChart,
  CardChartHeaderArea,
  CardChartHeaderText,
} from './styles';
import { Dimensions, ActivityIndicator } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GraphActions from '~/store/ducks/Graph/sendGraph/';

class Graphics extends Component {
  handleClick = param => {
    alert(param);
  };

  async UNSAFE_componentWillMount() {
    this.props.setGraphRequest();
  }

  render() {
    const sellersData = this.props.charts?.data.selling.map((dado, i) => {
      const graph = {
        data: dado.data,
        color: () => (i === 0 ? 'rgba(255,255,2,1)' : 'rgba(255,0,5,1)'),
      };
      return graph;
    });

    const sellersDataBar = this.props.charts?.data.nfe.map(dado => {
      const barGraph = {
        data: dado.data,
      };
      return barGraph;
    });
    // console.tron.log(sellersDataBar);

    return !this.props.charts ? (
      <ActivityIndicator />
    ) : (
      <Container>
        <Content>
          <CardChart>
            <CardChartHeaderArea>
              <CardChartHeaderText>Venda mensal</CardChartHeaderText>
            </CardChartHeaderArea>
            <LineChart
              onDataPointClick={({ value }) => this.handleClick(value)}
              data={{
                labels: [this.props.charts.categories],
                datasets: sellersData,
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel={''}
              yAxisSuffix={'k'}
              chartConfig={{
                backgroundColor: '#1E2923',
                backgroundGradientFrom: '#DCDCDC',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 5,
                elevation: 2,
              }}
            />
          </CardChart>

          <CardChart>
            <CardChartHeaderArea>
              <CardChartHeaderText>NF-e mensal</CardChartHeaderText>
            </CardChartHeaderArea>
            <BarChart
              onDataPointClick={({ value }) => this.handleClick(value)}
              data={{
                labels: [this.props.charts.categories],
                datasets: sellersDataBar,
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              yAxisLabel={''}
              yAxisSuffix={'k'}
              chartConfig={{
                backgroundColor: '#1E2923',
                backgroundGradientFrom: '#DCDCDC',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 5,
                elevation: 2,
              }}
            />
          </CardChart>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(GraphActions, dispatch);

const mapStateToProps = state => ({
  charts: state.Graph.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Graphics);
