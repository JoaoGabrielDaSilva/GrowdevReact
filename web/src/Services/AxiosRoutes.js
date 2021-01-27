import axios from 'axios'

class AxiosRoutes {
    constructor() {
        this.baseUrl = 'http://localhost:5000'
    }

    async postUsers(params, userInfo) {
        let valid = true

        const currentUsers = await this.getUsers('/users')

        if (!userInfo.name || !userInfo.login || !userInfo.password) {
            valid = false
        }

        currentUsers.find(user => {
            if (user.login === userInfo.login) {
                valid = false
            }
        })

        let request = null

        if (valid) {
            request = await axios.post(`${this.baseUrl}${params}`, userInfo)
        } else {
            request = null
        }
        
        return request
    }

    getUsers(params) {
        const data = axios.get(`${this.baseUrl}${params}`)
            .then(response => response.data)
            .catch(error => console.log(`getUsers: ${error}`))

        return data
    }

    async checkLogin(params, userInfo, setIsValid, navigate) {
        const request = await this.getUsers('/users')

        request.forEach(user => {
            if (userInfo.login === user.login && userInfo.password === user.password) {
                console.log('valido')
                setIsValid(true)
                setTimeout(() => navigate('/home'), 500)
            } 
        })
    }
}

export default new AxiosRoutes()