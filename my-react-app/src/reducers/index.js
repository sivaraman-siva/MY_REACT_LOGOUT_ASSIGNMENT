export default (prevState = { increment:0, userList:[]},action) => {
    switch(action.type){
        case "INC":
        return {
            ...prevState,
            increment:action.value
        }
        case "DEC":
        return {
            ...prevState,
            increment:action.value
        }
        case "UsersList":
        return {
            ...prevState,
            userList:action.value
        }
    }
    return prevState;
};