const categoryTypes = {
    // make it longer
    GROCERY: 'grocery_store_which_is_a_store_that_sells_food_and_other_household_goods',
    ELECTRONICS: 'electronics_store_which_is_a_store_that_sells_electronics',
    CLOTHING: 'clothing_store_which_is_a_store_that_sells_clothing',
}

const transactions = [
    { user: 'Alice', amount: 50, category: categoryTypes.GROCERY },
    { user: 'Bob', amount: 300, category: categoryTypes.ELECTRONICS },
    { user: 'Alice', amount: 70, category: categoryTypes.GROCERY },
    { user: 'Charlie', amount: 20, category: categoryTypes.GROCERY },
    { user: 'Bob', amount: 150, category: categoryTypes.ELECTRONICS },
    { user: 'Alice', amount: 200, category: categoryTypes.CLOTHING },
    { user: 'Charlie', amount: 100, category: categoryTypes.CLOTHING },
    { user: 'David', amount: 100, category: categoryTypes.GROCERY },
    { user: 'Eve', amount: 200, category: categoryTypes.ELECTRONICS },
    { user: 'Frank', amount: 150, category: categoryTypes.GROCERY },
    { user: 'Grace', amount: 300, category: categoryTypes.ELECTRONICS },
    { user: 'Helen', amount: 400, category: categoryTypes.CLOTHING },
    { user: 'Ivy', amount: 500, category: categoryTypes.CLOTHING },
    { user: 'Jack', amount: 350, category: categoryTypes.GROCERY },
    { user: 'Karl', amount: 250, category: categoryTypes.ELECTRONICS }, 
    { user: 'Liam', amount: 150, category: categoryTypes.GROCERY },
    { user: 'Mary', amount: 100, category: categoryTypes.ELECTRONICS }, 
    { user: 'Nancy', amount: 200, category: categoryTypes.CLOTHING },
    { user: 'Oliver', amount: 300, category: categoryTypes.CLOTHING  },
    { user: 'Peter', amount: 475, category: categoryTypes.GROCERY },
    { user: 'Quinn', amount: 250, category: categoryTypes.ELECTRONICS },
    { user: 'Rose', amount: 150, category: categoryTypes.GROCERY },
    { user: 'Steve', amount: 100, category: categoryTypes.ELECTRONICS },
    { user: 'Tom', amount: 200, category: categoryTypes.CLOTHING },
  ];

  export default transactions;
  export {categoryTypes};