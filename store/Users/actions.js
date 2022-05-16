import { ADD_USER } from './actions-types'
import { ADD_USER as MT_ADD_USER } from './types'

export default {
  [ADD_USER] ({ commit, state }, user) {
    const users = [...state.users, user]
    this.$storage.set('users', users)
    commit(MT_ADD_USER, user)
  }
}
