export const fetchWeapons = async() => {
    const response = await fetch (`https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json`);
    if (!response.ok) {
        throw new Error('Failed to fetch weapon data');
      }
      const data = await response.json();
      return data;
};

  