const data = {
    nama: "dira",
    umur: 22,
    alamat: "lampung",
}

const userReducer = (state = data, action) => {
    switch (action.type) {
        case "UPDATE" :
            return {
                ...state,
                nama: action.payload
            }
        default :
            return state
    }
}

export default userReducer;
