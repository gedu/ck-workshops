import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TopSpenderItemList from './TopSpenderItemList';
import { useTransactions } from './TransactionContext';

const TopSpenderList = () => {
  const transactions = useTransactions();
  const topSpenders = findTopSpenders(transactions);
  const data = Object.entries(topSpenders);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Spenders by Category</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <TopSpenderItemList item={item} />}
        keyExtractor={(item) => item[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default TopSpenderList;