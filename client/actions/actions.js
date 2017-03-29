function fetchWifiData() {
    let myHeaders = new Headers();

    let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors-with-forced-preflight',
        cache: 'default'
    };

    myHeaders.append('Authorization', 'Token 73b895fbfa625d45c827c4fb40a138f54b4075dc');
    return fetch('/api/v1/datasets/29/versions/latest/data/?per_page=100', myInit);
}

export function makeLoadAction() {
    return function (dispatch) {
        dispatch({type: 'START_LOADING'});
        return fetchWifiData()
            .then(
                response => response.json(),
                console.log)
            .then(
                json => dispatch({type: 'END_LOADING', payload: json}),
                console.log
            );
    };
}

export function makeAddressSelection(address) {
    return {
        type: 'SELECT_ADDRESS',
        payload: address
    };
}

export function makeWifiSelection (wifiItem) {
    return {
        type: 'SELECT_WIFI',
        payload: wifiItem
    }
}