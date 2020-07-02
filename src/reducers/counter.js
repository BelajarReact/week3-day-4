
function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0
    }

    switch (action.type) {
        case 'TAMBAHKAN':
            return state + 1
        case 'KURANGI':
            return state - 1
        default:
            return state
    }
}

export default counter;