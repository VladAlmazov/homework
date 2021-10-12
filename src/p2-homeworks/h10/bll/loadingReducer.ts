type StateType = {
    isLoading: boolean
}

type ActionsType = loadingAT

type loadingAT = ReturnType<typeof loadingAC>

const initState: StateType = {
    isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state,
                isLoading: action.isLoading}
        }
        default: {
            return state
        }
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'CHANGE_LOADING', isLoading} as const)