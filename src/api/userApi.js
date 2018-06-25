import "whatwg-fetch";
// import { get } from "http";

export function getUsers() {
    console.log("Get user is bein instatiated");
    return get('users');
}

function get(url) {
    console.log("This is from get method");
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); //eslint-disable-line no-console
}