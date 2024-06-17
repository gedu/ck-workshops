import React, { createContext, useContext, useState, useMemo } from "react";
import transactions from "./transactionData";

// create a context to store the transaction data
const TransactionContext = createContext();

// custom hook to access the transaction data
export const useTransactions = () => {
  return useContext(TransactionContext);
};

// provider component to wrap the app and provide the transaction data
const TransactionProvider = ({ children }) => {
  const [transactionsData] = useState(transactions);

  return (
    <TransactionContext.Provider value={useMemo(() => ({ transactions: transactionsData}), [transactionsData])}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;