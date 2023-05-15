import config from 'config';
import { accountService } from '@/_services';

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
}

function get(url, is_refresh_token=false) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url, is_refresh_token)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        credentials: 'include',
        body: JSON.stringify(body)
    };  
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url, is_refresh_token=false) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = accountService.userValue;
    const isLoggedIn = user && user.access_token;
    const isApiUrl = url.startsWith(config.apiUrl);
    if (isLoggedIn && isApiUrl) {
        if (!is_refresh_token)
            return { Authorization: `Bearer ${user.access_token}` };
        else
            return { Authorization: `Bearer ${user.refresh_token}` };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log("Handling response")
        const data = text && JSON.parse(text);
        console.log(text)
        if (!response.ok) {
            console.log("Error response")
            if ([401, 403].includes(response.status) && accountService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                accountService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
    .catch(function (err) {
        console.log(err.message);
        console.log(err.stack);
    });
}