export const notificationAPI = () => {
    return fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        .then(res => {
            if (!res.ok) {
                throw new Error('Invalid URL');
            }
            return res.json()
        })
        .then(data => {
            const results=data.hits;
            const notification=Math.floor(Math.random()*results.length);
            return results[notification];
        })
        .catch(error => { throw error })
}
