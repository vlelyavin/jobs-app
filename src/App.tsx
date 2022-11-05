import { useReducer } from "react";
import { mainReducer, INITIAL_STATE } from "./reducers/mainReducer";
import { JobList } from "./components/JobList";
import { JobDetails } from "./components/JobDetails";
import { Routes, Route } from "react-router-dom";
import "./index.css";

export const App = () => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);
  return (
    <Routes>
      <Route path="/" element={<JobList state={state} dispatch={dispatch} />} />
      <Route path="/details" element={<JobDetails state={state} dispatch={dispatch} />} />
    </Routes>
  );
};
