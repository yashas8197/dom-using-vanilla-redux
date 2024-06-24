import { createStore } from "redux";
import profileReducer from "./profileReducer";
import { addProfile, calculateAvgAge, removeProfile } from "./actions";

const store = createStore(profileReducer);

store.subscribe(() => {
  updateProfileList();
});

const addProfileForm = document.querySelector("#addProfileForm");
const profileList = document.querySelector("#profileList");
const avgAge = document.querySelector("#avgAge");
const removeFormHandler = document.querySelector("#removeFormHandler");

function formHandler(e) {
  e.preventDefault();
  const profileId = document.querySelector("#profileId").value;
  const profileName = document.querySelector("#profileName").value;
  const profileAge = document.querySelector("#profileAge").value;

  store.dispatch(addProfile({ profileId, profileName, profileAge }));
  store.dispatch(calculateAvgAge());
}

addProfileForm.addEventListener("submit", formHandler);

function removeProfileHandler(e) {
  e.preventDefault();
  const profileLocation = document.querySelector("#profileLocation").value;
  store.dispatch(removeProfile(profileLocation));
  store.dispatch(calculateAvgAge());
  updateProfileList();
}

removeFormHandler.addEventListener("submit", removeProfileHandler);

function updateProfileList() {
  let state = store.getState();
  console.log(state);

  profileList.innerHTML = state.profile
    .map(
      (user) =>
        `<li>${user.profileId}. ${user.profileName} (${user.profileAge} years old)</li>`,
    )
    .join("");

  avgAge.textContent = state.averageAge;
}

updateProfileList();
