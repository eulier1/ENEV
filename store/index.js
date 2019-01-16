import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

import { VENEZUELANSTATES } from "../api/mock-data";

const state = {
  svg : {
    venezuelanStates : [],
    islands: [],
    others: []
  },
  cinema: { 
    isInitialLoading: true
  }
}
const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
}

export default createStore
