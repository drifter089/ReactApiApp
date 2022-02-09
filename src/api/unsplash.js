import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0EBWGTD97vgtr6uAjlsgfDlEb1I_lZrgMN5hpuFMvsA'
    }

});