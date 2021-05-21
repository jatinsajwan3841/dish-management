export const adddish = (dish) =>{
    return{
        type: 'adddish',
        payload: dish
    }
}

export const editdish = (dish) =>{
    return{
        type: 'editdish',
        payload: dish
    }
}

export const deletedish = (id) =>{
    return{
        type: 'deletedish',
        payload: id
    }
}

export const login= (user) =>{
    return{
        type: 'login',
        payload: user
    }
}

export const logout = () =>{
    return{
        type: 'logout',
    }
}