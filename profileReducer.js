import { ADD_PROFILE, CALCULATE_AVERAGE_AGE, REMOVE_PROFILE } from "./actions";
const initialState = { profile: [] };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return { ...state, profile: [...state.profile, action.payload] };
    case REMOVE_PROFILE:
      return {
        ...state,
        profile: state.profile.filter(
          (user) => parseInt(user.profileId) != action.payload,
        ),
      };
    case CALCULATE_AVERAGE_AGE:
      let totalAge = state.profile.reduce(
        (acc, curr) => acc + parseInt(curr.profileAge),
        0,
      );
      let averageAge = totalAge / state.profile.length;
      return {
        ...state,
        averageAge: averageAge.toFixed(),
      };
  }
};

export default profileReducer;
