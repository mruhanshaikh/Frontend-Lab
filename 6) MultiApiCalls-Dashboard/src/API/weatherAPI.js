const wheatherAPIKey = import.meta.env.VITE_WHEATHER_API_KEY
export const weatherAPI = (q) => {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${wheatherAPIKey}&q=${q.lat},${q.lon}`)
        .then(res => {
                if (!res.ok) {
                    throw new Error('Invalid URL');
                }
            return res.json()
        })
        .then(data => {
            return data
        })
        .catch(error => { throw error })
}
