export const INITIAL_STATE = {
    loading: false,
    post:{},
    error: false,
};
// update states and return new version of state
export const Reducer = (state,action)=>{
    switch(action.type){
        case "FETCH_START":
            return{
                loading: true,
                error: false,
                post:{},
            };
         case "FETCH_SUCCESS":
            return{
               
                loading:false,
                post: action.payload,
            } 
        case "FETCH_ERROR":
            return{
                loading: false,
                post:{},
                error: true,
            };    
                
            
    }
} 