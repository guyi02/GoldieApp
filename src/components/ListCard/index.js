import React from 'react';
import Card from '~/components/Card';
import EmptyList from '~/components/EmptyList';
import ListCardHeader from '~/components/ListCardHeader';
import { FlatList, Text, View } from 'react-native';

const ListCard = ({ data, clientName, handleClick }) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => item.key}
    renderItem={({ item }) => (
      <Card handleClick={param => handleClick(param)} item={item} />
    )}
    ListEmptyComponent={<EmptyList message="Lista vazia" />}
    ListHeaderComponent={<ListCardHeader clientName={clientName} />}
  />
);

export default ListCard;
