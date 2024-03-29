import axios from "axios";

const API_URL = 'http://localhost:8005/budget/';

export const getAllTransactions = () => {
    return fetch(API_URL + 'getAllTransactions')
        .then((response) => {
            return response.json();
        })
        .then(result => {
            console.log("transactions: ", result);
            console.log("test")
            return result; // return the result
        })
}
