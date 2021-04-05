import axios from 'axios';

export const Userlogin = user => {
    return fetch(`http://localhost:3000/api/login`,{
        method:"POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}

export const UserAuthenticate = (data, next) => {
    console.log(data)
    if(typeof window !== 'undefined') {
        localStorage.setItem('token', data.data.token)
        next();
    }
}


export const logout = async (next) => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('token')
        next();
        axios.get(`http://localhost:3000/api/logout`)
        .then(response => {
            console.log('logout', response)
        })
        .catch(error => console.log(error))
    }
}


export const isUserAuthenticated = () => {
    return (typeof window == 'undefined' || !localStorage.getItem('token') ? false : true)
}