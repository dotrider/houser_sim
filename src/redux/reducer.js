import axios from 'axios';


let initialState = {
        houses: [],
        loading: false,
        name: '',
        address:'',
        city: '',
        state: '',
        zip: 0,
        image: '',
        mortgage: 0,
        rent: 0
}

const SET_HOUSES = 'SET_HOUSES';
const SET_IMAGE = 'SET_IMAGE';
const SET_MORTGAGE = 'SET_MORTGAGE';
const SET_RENT = 'SET_RENT';
const UPDATE_INFO = 'UPDATE_INFO';



export const getHouses = () => {
   let homes = axios.get('/api/houses')
//    console.log('axiosGet', homes)
   return{
       type: SET_HOUSES,
       payload: homes
   }
}


export const updateInfo = (obj) => {
    console.log('updateR', obj)
    return{
        type: UPDATE_INFO,
        payload: obj
    }
}

export const updateImg = (image) => {
    console.log('updateI', image)
    return{
        type: SET_IMAGE,
        payload: image
    }
}


export default function reducer (state = initialState, action) {
    console.log('reducer',action)
    switch(action.type){
        case SET_HOUSES + '_PENDING':
            return {...state, loading: true};
        case SET_HOUSES + '_FULFILLED':
            return {...state, loading: false, houses: action.payload.data};
        case SET_HOUSES + '_REJECTED':
            return {...state, loading: false};  
        case UPDATE_INFO:
            return {...state, ...action.payload};      
        case SET_IMAGE:
            return {...state, image: action.payload};
        case SET_MORTGAGE:
            return {...state, mortgage: action.payload};
        case SET_RENT:
            return {...state, rent: action.payload};
        default:
            return state;
    }

}