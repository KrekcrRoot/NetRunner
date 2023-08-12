import {AxiosInstance} from "axios";

export default (instance: AxiosInstance) => {
    return {
        async refresh(refresh_token: string) {
            return await instance.post('/realms/netrunner-realm/protocol/openid-connect/token', {
                grant_type: 'refresh_token',
                client_id: 'netrunner-courses-client',
                refresh_token: refresh_token,
            })
        },
        async init(code: string) {
            return await instance.post('/realms/netrunner-realm/protocol/openid-connect/token', {
                grant_type: 'authorization_code',
                client_id: 'netrunner-courses-client',
                code: code,
                redirect_uri: 'http://localhost:5173/auth',
                code_verifier: 't.XTHUrgIo06g0Uirtj0.z09Cufi7J3AuqeyCx78Zkv9.UW.u7zd59BCxzD2SFfJVmImZO0latYd_5nRhVGjegrDaO9sqKx5hqr0vbD63kbuMkmHBDWFcMhJJn0pFuCA',
            })
        },

    }
}