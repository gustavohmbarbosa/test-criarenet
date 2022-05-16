import { ADD_USER, DELETE_USER, EDIT_USER } from './actions-types'
import { ADD_USER as MT_ADD_USER, DELETE_USER as MT_DELETE_USER, EDIT_USER as MT_EDIT_USER } from './types'

export default {
  [ADD_USER] ({ commit, state }, user) {
    const users = [...state.users, user]
    this.$storage.set('users', users)
    commit(MT_ADD_USER, user)
  },
  [DELETE_USER] ({ commit, state }, cpf) {
    const users = state.users.filter(user => user.cpf !== cpf)
    this.$storage.set('users', users)
    commit(MT_DELETE_USER, cpf)
  },
  [EDIT_USER] ({ commit, state }, data) {
    const users = state.users.map(user => user.cpf === data.cpf ? data : user)
    this.$storage.set('users', users)
    commit(MT_EDIT_USER, data)
  }
}
