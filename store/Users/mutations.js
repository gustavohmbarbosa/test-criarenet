import { ADD_USER, SET_USERS, DELETE_USER, EDIT_USER } from './types'

export default {
  [SET_USERS] (state, users) {
    state.users = users
  },
  [ADD_USER] (state, user) {
    state.users = [...state.users, user]
  },
  [DELETE_USER] (state, cpf) {
    state.users = state.users.filter(user => user.cpf !== cpf)
  },
  [EDIT_USER] (state, data) {
    state.users = state.users.map(user => user.cpf === data.cpf ? data : user)
  }
}
