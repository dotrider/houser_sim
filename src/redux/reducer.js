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
const SET_NAME = 'SET_NAME';
const SET_ADDRESS = 'SET_ADDRESS';
const SET_CITY = 'SET_CITY';
const SET_STATE = 'SET_STATE';
const SET_ZIP = 'SET_ZIP';
const SET_IMAGE = 'SET_IMAGE';
const SET_MORTGAGE = 'SET_MORTGAGE';
const SET_RENT = 'SET_RENT';


export const getHouses = () => {
   let homes = axios.get('/api/houses')
//    console.log('axiosGet', homes)
   return{
       type: SET_HOUSES,
       payload: homes
   }
}

export default function reducer (state = initialState, action) {
    console.log(action)
    switch(action.type){
        case SET_HOUSES + '_PENDING':
            return {...state, loading: true};
        case SET_HOUSES + '_FULFILLED':
            return {...state, loading: false, houses: action.payload.data};
        case SET_HOUSES + '_REJECTED':
            return {...state, loading: false};   
        case SET_NAME:
            return {...state, name: action.payload};
        case SET_ADDRESS:
            return {...state, address: action.payload};
        case SET_CITY:
            return {...state, city: action.payload};
        case SET_STATE:
            return {...state, state: action.payload};
        case SET_ZIP:
            return {...state, zip: action.payload};
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