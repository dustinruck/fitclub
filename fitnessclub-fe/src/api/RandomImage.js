
export async function RandomImage(name) {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=${name}&client_id=YOUR_ACCESS_KEY`);
      const data = await response.json();
      return data.urls.regular; // Return the URL of the regular-sized image
    } catch (error) {
      console.error('Error fetching random image:', error);
      return null;
    }
  }

//export default RandomImage;