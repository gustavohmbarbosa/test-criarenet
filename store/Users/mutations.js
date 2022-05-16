import { SET_USERS } from './types'

export default {
  [SET_USERS] (state, users) {
    state.users = users
  }
}
