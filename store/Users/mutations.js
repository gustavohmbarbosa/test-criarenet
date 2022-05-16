import { ADD_USER, SET_USERS, DELETE_USER } from './types'

export default {
  [SET_USERS] (state, users) {
    state.users = users
  },
  [ADD_USER] (state, user) {
    state.users = [...state.users, user]
  },
  [DELETE_USER] (state, cpf) {
    state.users = state.users.filter(user => user.cpf !== cpf)
  }
}
