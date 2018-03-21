export const state = () => (
	{
		email: null
	}
)

export const getters = {
	authenticated (state, getters) {
		return !!state.email
	},		
	email (state, getters) {
		return state.email
	},
}

export const mutations = {
	SET_EMAIL (state, user) {
		state.email = user ? user.email : null
	}		
}

export const actions = {
	setEmail ({ commit }, user) {
		commit('SET_EMAIL', user)
	}
}