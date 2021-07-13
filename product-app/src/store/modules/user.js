import axios from 'axios';
import router from "../../router/index";

const state = {
    CURRENT_USER: null,
    TOKEN: null,
    LOGGED_IN: false
};

const getters = {
    GET_USER: (state) => state.CURRENT_USER,
    GET_USER_TOKEN: (state) => state.TOKEN,
    GET_LOGGED_IN_STATUS: (state) => state.LOGGED_IN
};

const actions = {
    REGISTER: async (name, email, password) => {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/register',
            name, email, password);
        console.log(response);
        router.push({ path: '/' });
    },
    LOGIN: async ({ dispatch, commit }, email, password) => {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/login',
            email, password);
        commit('SET_TOKEN', response.data.token);
        window.localStorage.setItem('token', response.data.token);
        return dispatch('LOGGED_IN_USER');
    },
    LOG_OUT: async ({ commit }) => {
        const token = window.localStorage.getItem('token');
        const config = axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
        const response = await axios.post('/api/logout', null, config);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
        commit('SET_LOGIN_STATUS', false);
        window.localStorage.removeItem('token');
    },
    LOGGED_IN_USER: async ({ commit }) => {
        const token = window.localStorage.getItem('token');
        const config = axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
        return axios.get('/api/user', config).then(response => {
            commit('SET_USER', response.data);
            commit('SET_LOGIN_STATUS', true);
            router.push({ path: `/user/${response.data.id}` });
        }).catch(() => {
            commit('SET_USER', null);
            commit('SET_TOKEN', null);
            commit('SET_LOGIN_STATUS', false);
        });
    }
};

const mutations = {
    SET_USER: (state, user) => {
        state.CURRENT_USER = user;
    },
    SET_TOKEN: (state, token) => {
        state.TOKEN = token;
    },
    SET_LOGIN_STATUS: (state, login) => {
        state.LOGGED_IN = login;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}