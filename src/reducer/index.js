import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const reducer = (state = initialState, action) => {
    console.log('reducer action value:', action);
    switch (action.type) {
        case ADD_FEATURE:
            const newFeature = state.additionalFeatures.find(item => item.id === action.payload.id)
            return {...state, car: {...state.car, features: [...state.car.features, newFeature]}, 
                additionalPrice: state.additionalPrice + newFeature.price};
        case REMOVE_FEATURE:
            const keepFeatures = state.car.features.filter(item => item.id !== action.payload.id)
            const newPrice = keepFeatures.reduce((accumulator, item) => {return accumulator + item.price}, 0)
            return {...state, 
                car: {...state.car, features: keepFeatures},
                additionalPrice: newPrice};
        default: return state;
    }
}