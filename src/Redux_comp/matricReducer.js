const matricSave = (state = "", action) => {
    switch(action.type) {
        case "login":
            return state = action.payload;
        default:
            return state;
    }
}

export default matricSave;