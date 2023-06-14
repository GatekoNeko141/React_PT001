import { createSlice } from '@reduxjs/toolkit'

export const AuthSesion = createSlice({
  name: 'sesion',
  initialState: {
    timeLogged: 0
  },
  reducers:{
    SET_SESION: (state, action) => {
      state.timeLogged = action.payload
    }
  }
})

export const { SET_SESION } = AuthSesion.actions
export default AuthSesion.reducer