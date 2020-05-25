import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
    clientId: 'vYUeH0tPKTW2Fv90VuOpgG2DHehP5RN2',
    clientSecret: 'tAbxICDiR4KTvOFl5cGKVyTD0btXFdGhDM-E1KLMzAVZhY87MGgrrJcS3esuzfdS',
    scope: 'user',
    domain: 'mydailystatus123.auth0.com',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000',
    session: {
        cookieSecret: 'asdfasdfasdfasdfasdfasdfasdfasdf',
        cookieLifetime: 3600
    }
})