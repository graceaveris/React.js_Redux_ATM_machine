
//Reducer! We apply a method based on the action that has been dispatched.
//an app may have multiple reducers.

const initialState = {
	balance: 2500
};

const reducer = (state = initialState, action) => {
  const newState = {...state};
  
  if (action.type === 'withdraw50') {
  	newState.balance -=50
 
 } else if (action.type === 'withdraw100') {
  	newState.balance -=100
 };

//we return the value back to the store! And update the dom.
 return newState
}

export default reducer;
