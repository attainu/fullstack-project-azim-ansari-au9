// import React from 'react';
import axios from 'axios';



export const login = admin => {
    return fetch(`http://localhost:3000/api/admin/login`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(admin)
    })
    .then(response => {
        // console.log(response)
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}



export const authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('token', JSON.stringify(data.data.token))
        next();
    }
}

export const logout = async (next) => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('token')
        next();
        axios.get(`http://localhost:3000/api/admin/logout`)
        .then(response => {
            console.log('logout', response)
        })
        .catch(error => console.log(error))
    }
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
        return false
    }
    if(localStorage.getItem('token')) {
        return JSON.parse(localStorage.getItem('token'))
    } else {
        return false
    }
}