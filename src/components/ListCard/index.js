import React from 'react';
import Card from '~/components/Card';
import EmptyList from '~/components/EmptyList';
import ListCardHeader from '~/components/ListCardHeader';
import { FlatList } from 'react-native';

const ListCard = ({ data, clientName, bg, handleClick }) => (
  <FlatList
    style={{ marginBottom: 10 }}
    data={data}
    keyExtractor={(item, index) => item.key}
    renderItem={({ item }) => (
      <Card handleClick={param => handleClick(param)} item={item} />
    )}
    ListEmptyComponent={<EmptyList message="Lista vazia" />}
    ListHeaderComponent={<ListCardHeader bg={bg} clientName={clientName} />}
  />
);

export default ListCard;
