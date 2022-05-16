import { GET_USER_BY_DOCUMENT } from './types'

export const state = () => ({
  users: []
})

export const getters = {
  [GET_USER_BY_DOCUMENT]: state => (document) => {
    return state.users.find(user => user.cpf === document)
  }
}
