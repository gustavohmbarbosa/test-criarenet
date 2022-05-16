import { ADD_USER, SET_USERS } from './types'

export default {
  [SET_USERS] (state, users) {
    state.users = users
  },
  [ADD_USER] (state, user) {
    state.users = [...state.users, user]
  }
}
