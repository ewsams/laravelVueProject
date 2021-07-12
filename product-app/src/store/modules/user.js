import axios from 'axios';

const state = {
    currentUser: null,
    token:null,
    loggedIn: false
};

const getters = {
    GET_USER: (state) => state.currentUser,
    GET_USER_TOKEN: (state) => state.token
};

const actions = {
    REGISTER: async ({ commit }, name, email, password) => {
        const response = await axios.post('http://localhost:8000/api/register',
            name, email, password);
        console.log(response);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN',response.data.token);
    },
    LOGIN: async ({ commit }, email, password) => {
        const response = await axios.post('http://localhost:8000/api/login',
            email, password);
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN',response.data.token);
        commit('SET_LOGIN_STATUS',true);
    }
};

const mutations = {
   SET_USER: (state, user) => {
        state.currentUser = user;
    },
    SET_TOKEN:(state,token) => {
        state.token = token;
    },
    SET_LOGIN_STATUS:(state,login) => {
        state.loggedIn = login;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}