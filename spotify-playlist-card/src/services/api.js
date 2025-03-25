const API_BASE_URL = "https://spotify-playlist-sharing.onrender.com"; 

export const fetchPlaylists = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/playlists`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return []; 
  }
};