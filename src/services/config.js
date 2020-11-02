
const devBaseURL = "http://139.196.156.77:9501/admin/v1/api/";
const proBaseURL = "http://139.196.156.77:9501/admin/v1/api/";


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIMEOUT = 10000;


