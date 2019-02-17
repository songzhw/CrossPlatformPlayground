export const TRY_LOGIN = 'TRY_LOGIN'
export const tryLogin = () => ({
  type: TRY_LOGIN
})

export const LOGIN_SUCC = 'LOGIN_SUCC'
export const loginSucc = resp => ({
  type: LOGIN_SUCC,
  ...resp
})

const initState = {
  succ: false,
  session: ""
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCC:
      console.log(`szw reducer LOGIN_SUCC`)
      const {succ, session} = action
      return {succ: succ, session: session}
    default:
      return state
  }
}

