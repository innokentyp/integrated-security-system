import * as firebase from 'firebase'

export default function ({ route, redirect }) {
	console.log(route.fullPath)

	if (['index'].includes(route.name) || firebase.auth().currentUser) return

  return redirect('/')
}