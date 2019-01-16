
export const setVenezuelanMap = (state, venezuelanStates) => {
    state.svg.venezuelanStates = venezuelanStates
}

export const setIslandMap = (state, islands) => {
    state.svg.islands = islands
}

export const setOthersMap = (state, others) => {
    state.svg.others = others
}

export const initialLoading = (state, value) => {
    state.cinema.isInitialLoading = value
}
