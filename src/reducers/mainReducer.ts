import { CHANGE_LOADING_STATUS, SET_JOBS, SET_SELECTED_JOB } from "../actions/mainActions";
import { stateInterface } from "../interfaces/interfaces";
import { actionInterface } from "../interfaces/interfaces";

export const INITIAL_STATE = {
  loaded: false,
  selected: JSON.parse(sessionStorage.getItem("selected") as any),
  jobs: [],
};

export const mainReducer = (state: stateInterface, action: actionInterface) => {
  switch (action.type) {
    case SET_SELECTED_JOB:
      return { ...state, selected: action.payload };
    case SET_JOBS:
      return { ...state, jobs: action.payload };
    case CHANGE_LOADING_STATUS:
      return { ...state, loaded: action.payload };
    default:
      return state;
  }
};
