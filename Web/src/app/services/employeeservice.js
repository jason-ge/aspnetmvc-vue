import axios from 'axios';

const httpHeaders = { 'Content-Type': 'application/json' };

export default {
    getEmployee() {
        return axios.get(baseUrl + "api/EmployeeData/GetEmployee", { headers: httpHeaders });
    },
}