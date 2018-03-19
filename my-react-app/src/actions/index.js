export function increment(inc) {
    return {
        type: "INC",
        value:inc
    };
}

export function Decrement(inc) {
    return {
        type: "DEC",
        value:inc
    };
}

export function UserLogout(status){
    console.log(status);
    return {
        type: "UsersList",
        value:status
    };
}