export default async function getAllFish() {
    const randomQueryParam = `cacheBuster=${Date.now()}`;
    const url = `https://fish-species.p.rapidapi.com/fish_api/fishes?${randomQueryParam}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fc8f10559amsh7d96aa4d765690fp1b200fjsnf920b668d518',
        'X-RapidAPI-Host': 'fish-species.p.rapidapi.com',
        'Cache-Control': 'no-cache',
      },
    };
  
    try {
      const response = await fetch(url, options);
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  