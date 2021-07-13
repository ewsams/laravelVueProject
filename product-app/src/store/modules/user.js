import axios from 'axios';
import router from "../../router/index";

const state = {
    currentUser: null,
    token: null,
    loggedIn: false
};

const getters = {
    GET_USER: (state) => state.currentUser,
    GET_USER_TOKEN: (state) => state.token,
    GET_LOGGED_IN_STATUS: (state) => state.loggedIn
};

const actions = {
    REGISTER: async ({ commit }, name, email, password) => {
        const response = await axios.post('/api/register',
            name, email, password);
        console.log(response);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
    },
    LOGIN: async ({ commit }, email, password) => {
        const response = await axios.post('/api/login',
            email, password);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
        commit('SET_LOGIN_STATUS', true);
        router.push({ path: `/user/${state.currentUser.id}` });
    },
    LOG_OUT: async ({ commit }) => {
        await axios.get('/sanctum/csrf-cookie');
        const config = axios.defaults.headers.common = { 'Authorization': `Bearer ${state.token}`, 'Accept': 'application/json' };
        const response = await axios.post('/api/logout', null, config);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
        commit('SET_LOGIN_STATUS', false);
    }
};

const mutations = {
    SET_USER: (state, user) => {
        state.currentUser = user;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_LOGIN_STATUS: (state, login) => {
        state.loggedIn = login;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}