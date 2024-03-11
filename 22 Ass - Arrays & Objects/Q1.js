const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of >our shopping cart if it has not been alreay added! 
shoppingCart.unshift('Meat')
console.log(shoppingCart);

//add Sugar at the en" of >ou shopping cart if it has not been already added.
shoppingCart.push('Sugar');
console.log(shoppingCart);

//remove "Honey" if you are allergic to Honey.
shoppingCart.splice(4, 1);
console.log(shoppingCart);

//modify  Tea to 'Green Tea'
shoppingCart.splice(3, 1, 'Green Tea')
console.log(shoppingCart);
