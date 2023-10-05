import axios from "axios"


export const register = (name, email, password) => async (dispatch) => {
      try {
            dispatch({
                  type: "registerRequest",
            })
            const { data } = await axios.post("/api/v1/register",
                  { name, email, password },
                  {
                        headers: {
                              "Content-Type": "application/json"
                        }
                  }
            )
            console.log(data);
            dispatch({
                  type: "registerSuccess",
                  payload: data.user
            })
      } catch (error) {
            dispatch({
                  type: "registerFail",
                  payload: error.message
            })
            console.log(error.response.data.message);
      }
}

export const login = (username, password) => async (dispatch) => {
      try {

            dispatch({
                  type: "loginRequest"
            })

            const { data } = await axios.post("/api/v1/login", { username, password },
                  {
                        headers: {
                              "Content-Type": "application/json"
                        }
                  });

            // console.log(data);

            dispatch({
                  type: "loginSuccess",
                  payload: data.user
            })
      } catch (error) {
            dispatch({
                  type: "loginFail",
                  payload: error.response.data.message
            })
            console.log(error.response.data.message);
      }

}

export const loadUser = () => async (dispatch) => {
      try {
            dispatch({
                  type: "LoadUserRequest",
            });

            const { data } = await axios.get(`/api/v1/me`);

            dispatch({
                  type: "LoadUserSuccess",
                  payload: data.user,
            });
      } catch (error) {
            dispatch({
                  type: "LoadUserFailure",
                  payload: error.response.data.message,
            });
      }
};
export const logout = () => async (dispatch) => {
      try {
            dispatch({
                  type: "logoutRequest",
            });

            const { data } = await axios.get(`/api/v1/logout`);

            dispatch({
                  type: "logoutSuccess",
                  payload: data.message,
            });
            console.log(data);
      } catch (error) {
            dispatch({
                  type: "logoutFailure",
                  payload: error.response.data.message,
            });
      }
};