import axios from 'axios'

class AxiosRoutes {
    constructor() {
        this.baseUrl = 'http://localhost:5000'
    }

    async postUsers(params, userInfo) {
        let valid = true

        const currentUsers = await this.getUsers('/users')

        currentUsers.find(user => {
            if (user.login === userInfo.login) {
                valid = false
            }
        })

        const request = await axios.post(`${this.baseUrl}${params}`, userInfo)
        
        return request

    }

    getUsers(params) {
        const data = axios.get(`${this.baseUrl}${params}`)
            .then(response => response.data)
            .catch(error => console.log(`getUsers: ${error}`))

        return data
    }
}

export default new AxiosRoutes()