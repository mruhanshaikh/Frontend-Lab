export const featureContentAPI = () => {
    return fetch("https://api.spaceflightnewsapi.net/v4/articles/")
        .then(res => {
            if (!res.ok) {
                throw new Error('Invalid URL');
            }
            return res.json()
        })
        .then(data => {
            const results=data.results;
            const news=Math.floor(Math.random()*results.length);
            return results[news];
        })
        .catch(error => { throw error })
}
