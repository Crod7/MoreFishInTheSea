export default async function getAllFish() {
  const url = `https://fish-species.p.rapidapi.com/fish_api/fishes`;

  try {
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'GET',
      headers:{
      'X-RapidAPI-Key': 'fc8f10559amsh7d96aa4d765690fp1b200fjsnf920b668d518',
      'X-RapidAPI-Host': 'fish-species.p.rapidapi.com',
      }
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}