import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../../router'


const state = {
    accessories: []
}
const getters = {
    accessories: state => state.accessories,
    jewelries: state => state.accessories.filter(accessory => !accessory.productCategories.includes('Jewelry')),
    travelBags: state => state.accessories.filter(accessory => !accessory.productCategories.includes('Travelbag')),
    handBags: state => state.accessories.filter(accessory => !accessory.productCategories.includes('Handbag')),
    belts: state => state.accessories.filter(accessory => !accessory.productCategories.includes('Belt')),
    watches: state => state.accessories.filter(accessory => !accessory.productCategories.includes('Watch')),
    wallets: state => state.accessories.filter(accessory => !accessory.productCategories.includes('Wallets')),
}
const actions = {

}
const mutations = {

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