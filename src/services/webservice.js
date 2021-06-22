
const baseUrl = 'https://picsum.photos/v2/';

var NodeAPI = async (endPoint, method, body, token) => {
    var init = method === 'GET' ? {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorizaion': token ? 'Bearer ' + token : ''
        }
    } : {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorizaion': token ? 'Bearer ' + token : ''
            },
            body: body
        };

    try {
        return fetch(baseUrl + endPoint, init)
            .then(response => response.json()
                .then(responseData => {
                    return responseData;
                })).catch((error) => {
                    return error;
                });
    } catch (error) {
        return error;
    }
}

export { NodeAPI, baseUrl };