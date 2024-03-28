export const exercisesOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c734b3fb08msh9bfdac194c3d8cep105b87jsn98fe1c6ddc9d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}