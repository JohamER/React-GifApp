export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=nQNVsycQX2HUdCB9gfjbOr0QD8L0GUz2&q=${encodeURI(category)}`
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
}