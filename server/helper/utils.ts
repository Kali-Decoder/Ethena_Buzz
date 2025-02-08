import dotenv from 'dotenv';
dotenv.config();

const API_HOST = 'twitter241.p.rapidapi.com';
const API_KEY = process.env.RAPIDAPI_KEY || '';

async function fetchFromTwitter(endpoint: string, params: Record<string, string>): Promise<any> {
    const url = new URL(`https://${API_HOST}/${endpoint}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

    const options: RequestInit = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY
        }
    };

    try {
        const response: Response = await fetch(url.toString(), options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        return null;
    }
}

export async function getRetweets(pid: string, count: number): Promise<any> {
    return fetchFromTwitter('retweets', { pid, count: count.toString() });
}

export async function getUserByUsername(username: string): Promise<any> {
    return fetchFromTwitter('user', { username });
}

export async function getTweetById(pid: string): Promise<any> {
    return fetchFromTwitter('tweet', { pid });
}