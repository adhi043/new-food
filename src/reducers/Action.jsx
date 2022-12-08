import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./Type"

export const fetchRequest=()=>{

    return{

        type:FETCH_REQUEST

    }

}

export const fetchSuccess=(values)=>{

    return{

        type:FETCH_SUCCESS,

        payload:values

    }

}

export const fetchError=(error)=>{

    return{

        type:FETCH_ERROR,

        payload:error

    }

}