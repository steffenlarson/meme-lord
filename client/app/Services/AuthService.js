import { ProxyState } from '../AppState.js'
import { audience, clientId, domain } from '../AuthConfig.js'
import { memeapi } from './AxiosService.js'
import { accountService } from './AccountService.js'

export const AuthService = Auth0Provider.initialize({
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    window.location.replace(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async () => {
  memeapi.defaults.headers.authorization = AuthService.bearer
  ProxyState.user = AuthService.user
  await accountService.getAccount()
})
