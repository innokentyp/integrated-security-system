export const state = () => (
	{
		authenticated: false,
		email: null
	}
)

export const mutations = {
	SET_AUTHENTICATED (state, user) {
		state.authenticated = !!user
		state.email = user ? user.email : null
	}		
}

export const actions = {
	setAuthenticated ({ commit }, user) {
		commit('SET_AUTHENTICATED', user)
	}
}