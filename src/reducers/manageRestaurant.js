import cuid from 'cuid';

export default function manageRestaurants(state={
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT": {
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          {
            text: action.payload,
            id: cuid(),
          },
        ],
      }
    }
    default: {
      return state
    }
  }
}
