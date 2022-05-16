import { SET_USERS } from './Users/types'

export const actions = {
  nuxtServerInit ({ commit }, { app }) {
    let users = app.$storage.get('users')

    if (!users) {
      users = [
        { name: 'Jesse', mail: 'Jesse@test.com.br', phone: '11987654321', cpf: '11244545784' },
        { name: 'John', mail: 'John@test.com.br', phone: '11987654321', cpf: '05578411244' },
        { name: 'Tina', mail: 'Tina@test.com.br', phone: '11987654321', cpf: '54112445784' },
        { name: 'Clarence', mail: 'Clarence@test.com.br', phone: '11987654321', cpf: '04112445784' },
        { name: 'Anne', mail: 'Anne@test.com.br', phone: '11987654321', cpf: '78404112445' }
      ]
    }
    commit(`Users/${SET_USERS}`, users)
  }
}
