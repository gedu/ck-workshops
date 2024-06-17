import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {categoryTypes} from './transactionData';
import {isFavorite, toggleFavorite} from './favoriteManager';

const TopSpenderItemList = ({ item }) => {
  const [_, setFavorite] = useState(0);
  const category = item[0];
  const spender = item[1];
  const favorite = isFavorite(id);

  let backgroundColor = '#ffffff';

  if (category === categoryTypes.GROCERY) {
    backgroundColor = '#ff6666';
  } else if (category === categoryTypes.ELECTRONICS) {
    backgroundColor = '#ffcc00';
  } else if (category === categoryTypes.CLOTHING) {
    backgroundColor = '#66ccff';
  }

  return (
    <View style={[styles.item, { backgroundColor }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.user}>{spender.user}</Text>
        <Text style={styles.amount}>${spender.amount}</Text>
      </View>
      <Button
        title={favorite ? 'Unfavorite' : 'Favorite'}
        onPress={() => {
          toggleFavorite(id);
          setFavorite(new Date().getTime());
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ededed',
      marginBottom: 8,
    },
    infoContainer: {
      flexDirection: 'column',
    },
    category: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    user: {
      fontSize: 16,
    },
    amount: {
      fontSize: 16,
      color: '#00b300',
    },
  });

export default TopSpenderItemList;