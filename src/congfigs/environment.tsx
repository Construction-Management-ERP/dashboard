import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
    END_POINT : process.env.END_POINT ? process.env.END_POINT : 'http://localhost:8000/api',
    MODE : process.env.MODE ? process.env.MODE : 'local',
    API_KEY: process.env.API_KEY ? process.env.API_KEY : ''
}