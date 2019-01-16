export const loadedStates = (state) => {
    return state.svg.venezuelanStates
}

export const getSVGIslands = (state) => {
    return state.svg.islands
}

export const getSVGOthers = (state) => {
    return state.svg.others
}

export const getStateByName = (state) => (name) => {
    return state.svg.venezuelanStates.find(state => state.name === name)
}

export const getInitialLoading = (state) => {
    return state.cinema.isInitialLoading
}