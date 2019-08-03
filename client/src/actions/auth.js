import axios from "axios";
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./types";

// sign up user

export const signup = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL
    });
  }
};
