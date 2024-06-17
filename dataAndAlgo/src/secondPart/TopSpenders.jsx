import React from 'react';
import { SafeAreaView } from 'react-native';
import TransactionProvider from './TransactionProvider';
import TopSpenderList from './TopSpenderList';

const TopSpenders = () => {
  return (
    <TransactionProvider>
        <SafeAreaView style={{ flex: 1 }}>
            <TopSpenderList />
        </SafeAreaView>
    </TransactionProvider>
  );
};

export default TopSpenders;