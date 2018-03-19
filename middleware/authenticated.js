import * as firebase from 'firebase'

export default function ({ route, redirect }) {
	console.log(route.fullPath)

	if (['index'].includes(route.name)) return

  if (!firebase.auth().currentUser) {

    return redirect('/')
  }
}