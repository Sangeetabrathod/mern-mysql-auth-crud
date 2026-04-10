import React, { createContext, useContext, useReducer, useEffect } from 'react'
import authApi from '../api/authApi.js'

const AuthContext = createContext()
const initialState = {
  user: null,
  token: null,
  loading: true
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      }
    case 'LOGOUT':
      return {
        ...initialState,
        loading: false
      }
    case 'LOADING':
      return { ...state, loading: true }
    case 'SET_USER':
      return { ...state, user: action.payload, loading: false }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authApi.getMe()
        .then(res => dispatch({ type: 'SET_USER', payload: res.data.user }))
        .catch(() => {
          localStorage.removeItem('token');
          dispatch({ type: 'LOGOUT' });
        });
    } else {
      dispatch({ type: 'SET_USER', payload: null });
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    localStorage.setItem('token', res.data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    return res.data;
  }

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  }

  const value = {
    ...state,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

