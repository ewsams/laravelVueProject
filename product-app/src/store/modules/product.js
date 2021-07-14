import axios from 'axios';

const state = {
    PRODUCTS: null
};

const getters = {
    GET_PRODUCTS: (state) => state.PRODUCTS,
};

const actions = {
    RETRIEVE_PRODUCTS: async ({ commit }) => {
        const response = await axios.get('/api/products');
        commit('SET_PRODUCTS',response.data);
    },
};

const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.PRODUCTS = products;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}