import * as api from "../api/index";

export const fetchAllStates = ({ commit }) => {
  api.getAllStates( (VenezuelanStates)=>{
    commit('setVenezuelanMap', VenezuelanStates)
  })
}

export const fetchIslandsSVG = ({ commit }) => {
  api.getSVGIslands( (islandsSVG)=>{
    commit('setIslandMap', islandsSVG)
  })
}

export const fetchOthersSVG = ({ commit }) => {
  api.getSVGOthers( (othersSVG)=>{
    commit('setOthersMap', othersSVG)
  })
}

export const setInitialLoading = ({commit}, value) => {
  commit('initialLoading', value)
}