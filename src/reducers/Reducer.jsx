import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./Type";

const initialState={

    loading:false,

    values:[],

    prod:[],

    error:''

}

const Reducer=(state=initialState,action)=>{

    switch (action.type) {

        case FETCH_REQUEST:        

            return {

                ...state,

                loading:true

            }

        case FETCH_SUCCESS:        

            return {

                loading:false,

                values:action.payload,
                prod:action.payload,

                error:''

            }

        case FETCH_ERROR:        

            return {

                loading:false,

               
                values:[],

                error:action.payload

            }

   

        default:

            return state;

    }

}

export default Reducer