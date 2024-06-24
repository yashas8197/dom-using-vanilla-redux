export const ADD_PROFILE = "profile/added";
export const REMOVE_PROFILE = "profile/removed";
export const CALCULATE_AVERAGE_AGE = "profile/calculateAverageAge";

export const addProfile = (profile) => ({
  type: ADD_PROFILE,
  payload: profile,
});

export const removeProfile = (profileID) => ({
  type: REMOVE_PROFILE,
  payload: parseInt(profileID),
});

export const calculateAvgAge = () => ({
  type: CALCULATE_AVERAGE_AGE,
});
