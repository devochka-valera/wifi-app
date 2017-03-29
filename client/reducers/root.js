const initialState = {
    isLoading: true,
    wifiSpots: undefined,
    addresses: undefined,
    address: undefined,
    wifiForSelected: undefined,
    selectedWifi: undefined
};

export default function wifi(state = initialState, action) {

    switch (action.type) {
        case 'END_LOADING' :
            let district = {};
            let items = action.payload;
            for (let i = 0; i < items.length; i++) {
                let key = items[i].row.district; // для каждого элемента создаём свойство
                district[key] = true;
            }
            return {...state, isLoading: false, wifiSpots: action.payload, addresses: Object.keys(district)};
        case 'START_LOADING' :
            return {...state, isLoading: true};
        case 'SELECT_ADDRESS' :
            return {...state, address: action.payload, wifiForSelected: state.wifiSpots.filter(item => item.row.district === action.payload)};
        case 'SELECT_WIFI' :
           return {...state, selectedWifi: action.payload};
    }
    return state;
}
