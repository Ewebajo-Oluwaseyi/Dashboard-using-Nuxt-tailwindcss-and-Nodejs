import Auth from '~/utils/auth'

export default function({ store, redirect }) {
  if (!Auth.userIsLogged()) {
    // return redirect('/')
  }
}
