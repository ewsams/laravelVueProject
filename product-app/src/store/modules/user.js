import axios from 'axios';

const state = {
    user: null,
    loggedIn: false
};

const getters = {
};

const actions = {
    REGISTER: async ({ commit }, name, email, password) => {
        const response = await axios.post('http://localhost:8000/api/register',
            name, email, password);
        console.log(response);
        commit('SET_USER', response);
    },
    LOGIN: async ({ commit }, email, password) => {
        const response = await axios.post('http://localhost:8000/api/login',
            email, password);
        console.log(response.data);
        commit('SET_USER', response.data);
    }
};

const mutations = {
   SET_USER: (state, user) => {
        state.user = user;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}