export const userDataAPI = () => {
    return fetch('https://api.github.com/search/users?q=type:user')
        .then(res => {
            if (!res.ok) {
                throw new Error('Invalid URL');
            }
            return res.json()
        })
        .then(data => {
            const users=(data.total_count / 10000000).toFixed(1);
            return users
        })
        .catch(error => { throw error })
}
