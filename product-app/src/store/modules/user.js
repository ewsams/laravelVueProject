import axios from 'axios';

const state = {
    user: null,
    loggedIn: false
};

const getters = {
};

const actions = {
    REGISTER: async ({ commit }, email, password, name) => {
        const response = await axios.post('http://localhost:8000/api/register',
            email, password, name);
        console.log(response.data);
        commit('setUser', response.data);
    },
    LOGIN: async ({ commit }, email, password) => {
        const response = await axios.post('http://localhost:8000/api/login',
            email, password);
        console.log(response.data);
        commit('setUser', response.data);
    }
};

const mutations = {
    setUser: (state, user) => {
        state.user = user;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}