import { createReducer } from "@reduxjs/toolkit";


const initialState = {}

export const userReducer = createReducer(initialState, {
      loginRequest: (state, action) => {
            state.loading = true
      },
      loginSuccess: (state, action) => {
            state.loading = false;
            state.authenticated = true;
            state.user = action.payload
      },
      loginFail: (state, action) => {
            state.loading = false;
            state.authenticated = false;
            state.error = action.payload;
      },


      registerRequest: (state, action) => {
            state.loading = true
      },
      registerSuccess: (state, action) => {
            state.loading = false;
            state.authenticated = true;
            state.user = action.payload;
      },
      registerFail: (state, action) => {
            state.loading = false;
            state.authenticated = false;
            state.error = action.payload;
      },

      LoadUserRequest: (state) => {
            state.loading = true;
      },
      LoadUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
      },
      LoadUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
      },


      logoutRequest: (state) => {
            state.loading = true;
      },
      logoutSuccess: (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.message = action.payload;
      },
      logoutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
      },


      clearErrors: (state, action) => {
            state.error = null
      },
      clearMessage: (state, action) => {
            state.error = null
      }



})
