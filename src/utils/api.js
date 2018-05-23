const APIKEY = '0d55ecb83e914ea48b31ac9cdd876a2e';
const fetchNews = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;
    const request = fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response.articles[0].title);
            return response;
        });
    return request;
}

export default fetchNews;