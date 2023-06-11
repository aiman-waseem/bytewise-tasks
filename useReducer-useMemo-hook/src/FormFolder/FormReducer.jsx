export const INITIAL_STATE = {
        title: "",
        desc: "",
        price: 0,
        category: "",
        tags: [],
        images: {
            sm:"",
            md:"",
            lg:"",
        },
        quantity:0,

}

export const FormReducer = (state,action)=>{
    switch(action.type){
        case "CHANGE_INPUT":
            return{
                ...state,
                [action.payload.name]:action.payload.value,
            };
        
        case "ADD_TAG":
          return{
            ...state,
            tags:[...state.tags, action.payload], //keep the previous array(...state.tags) but add here one more(action.payload)
          };
          
        case "REMOVE_TAG":
        return{
            ...state,
            tags: state.tags.filter((tag)=>tag !== action.payload) //its gonna take each tag and compare them with action.payload
            // it will return all tag but/except this tag action.payload 
        };
        
        case "INCREASE":
        return{
            ...state , //all state values will be same except quantity
            quantity: state.quantity+1,
        }

        case "DECREASE":
            return{
                ...state , //all state values will be same except quantity
            quantity: state.quantity - 1,
            };
          
        default:
            return state;    

    }
};