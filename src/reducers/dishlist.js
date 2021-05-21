const initialState = [{
    id: 0,
    dname: 'Torturi',
    dcarb: 9,
    dprot: 28,
    dfat: 0,
    dcal: 148
},
{
    id: 1,
    dname: 'Wolturi',
    dcarb: 3,
    dprot: 4,
    dfat: 2,
    dcal: 46
}
]

const dishlist = (state = initialState, action) => {
    switch(action.type){
        case 'adddish': 
            return [...state,action.payload]
        case 'editdish':
            const element = state.findIndex((elem) => elem.id == action.payload.id);
            //edit that element
            state[element] = action.payload
            return state
        case 'deletedish':
            return state.filter((t) => t.id !== action.payload)          
        default : 
            return state    
    }          
}

export default dishlist;