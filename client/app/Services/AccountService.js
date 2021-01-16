import { ProxyState } from '../AppState.js'
import { memeapi } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await memeapi.get('/account')
      ProxyState.account = res.data
    } catch (err) {
      console.error(err)
    }
  }
}

export const accountService = new AccountService()
