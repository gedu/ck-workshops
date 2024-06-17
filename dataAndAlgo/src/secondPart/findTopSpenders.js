function findTopSpenders(transactions) {
  const categories = {};

  for (const transaction of transactions) {
    if (!categories[transaction.category]) {
      categories[transaction.category] = [];
    }
    categories[transaction.category].push(transaction);
  }

  const topSpenders = {};
  for (const category in categories) {
    let maxAmount = 0;
    let topUser = '';
    
    for (const transaction of categories[category]) {
      let currentAmount = 0;
      for (const innerTransaction of categories[category]) {
        if (innerTransaction.user === transaction.user) {
          currentAmount += innerTransaction.amount;
        }
      }
      if (currentAmount > maxAmount) {
        maxAmount = currentAmount;
        topUser = transaction.user;
      }
    }
    topSpenders[category] = { user: topUser, amount: maxAmount };
  }
  
  return topSpenders;
}

export default findTopSpenders;