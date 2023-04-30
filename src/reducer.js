export const initialState = {
  basket: [],
  user: JSON.parse(localStorage.getItem("user")),
  address: {},
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

  const cart = [];
const reducer = (state=cart, action) => {
  // console.log("action >>>>", action);
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x)=>x.id === product.id);
      if(exist){
          return state.map((x) =>
           x.id === product.id ? {...x , qty : x.qty+1} : x);
      }
      else{
          const product = action.payload;
          return[
              ...state , 
              {
                  ...product,
                  qty : 1 ,

              }
          ]
      }
      break;
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`
          can't remove product whose id is ${index}
          `);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: { ...action.item },
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
