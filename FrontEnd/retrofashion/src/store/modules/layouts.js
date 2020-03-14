import createPersistedState from 'vuex-persistedstate'

const state = {
    isHomePage: false,
    isWomenPage: false,
    isMenPage: false,
    isChildrenPage: false,
    isSalesPage: false,
    isAccessoriesPage: false
}

const getters = {
    isHomePage: state => state.isHomePage,
    isWomenPage: state => state.isWomenPage,
    isMenPage: state => state.isMenPage,
    isChildrenPage: state => state.isChildrenPage,
    isSalesPage: state => state.isSalesPage,
    isAccessoriesPage: state => state.isAccessoriesPage,
}

const actions = {
    inHomePage({ commit }) {
        commit('SET_IS_WOMEN_PAGE', false)
        commit('SET_IS_MEN_PAGE', false)
        commit('SET_IS_CHILDREN_PAGE', false)
        commit('SET_IS_SALES_PAGE', false)
        commit('SET_IS_ACCESSORIES_PAGE', false)
        commit('SET_IS_HOME_PAGE', true)
    },
    inWomenPage({ commit }) {
        commit('SET_IS_MEN_PAGE', false)
        commit('SET_IS_CHILDREN_PAGE', false)
        commit('SET_IS_SALES_PAGE', false)
        commit('SET_IS_ACCESSORIES_PAGE', false)
        commit('SET_IS_HOME_PAGE', false)
        commit('SET_IS_WOMEN_PAGE', true)
    },
    inMenPage({ commit }) {
        commit('SET_IS_WOMEN_PAGE', false)
        commit('SET_IS_CHILDREN_PAGE', false)
        commit('SET_IS_SALES_PAGE', false)
        commit('SET_IS_ACCESSORIES_PAGE', false)
        commit('SET_IS_HOME_PAGE', false)
        commit('SET_IS_MEN_PAGE', true)
    },
    inChildrenPage({ commit }) {
        commit('SET_IS_WOMEN_PAGE', false)
        commit('SET_IS_MEN_PAGE', false)
        commit('SET_IS_SALES_PAGE', false)
        commit('SET_IS_ACCESSORIES_PAGE', false)
        commit('SET_IS_HOME_PAGE', false)
        commit('SET_IS_CHILDREN_PAGE', true)
    },
    inSalesPage({ commit }) {
        commit('SET_IS_WOMEN_PAGE', false)
        commit('SET_IS_MEN_PAGE', false)
        commit('SET_IS_CHILDREN_PAGE', false)
        commit('SET_IS_ACCESSORIES_PAGE', false)
        commit('SET_IS_HOME_PAGE', false)
        commit('SET_IS_SALES_PAGE', true)
    },
    inAccessoriesPage({ commit }) {
        commit('SET_IS_WOMEN_PAGE', false)
        commit('SET_IS_MEN_PAGE', false)
        commit('SET_IS_CHILDREN_PAGE', false)
        commit('SET_IS_SALES_PAGE', false)
        commit('SET_IS_HOME_PAGE', false)
        commit('SET_IS_ACCESSORIES_PAGE', true)
    }
}

const mutations = {
    SET_IS_WOMEN_PAGE: (state, payload) => state.isWomenPage = payload,
    SET_IS_MEN_PAGE: (state, payload) => state.isMenPage = payload,
    SET_IS_CHILDREN_PAGE: (state, payload) => state.isChildrenPage = payload,
    SET_IS_SALES_PAGE: (state, payload) => state.isSalesPage = payload,
    SET_IS_ACCESSORIES_PAGE: (state, payload) => state.isAccessoriesPage = payload,
    SET_IS_HOME_PAGE: (state, payload) => state.isHomePage = payload
}



export default {
    namespaced: true,
    plugins: [
        createPersistedState()
    ],
    state,
    getters,
    actions,
    mutations
}