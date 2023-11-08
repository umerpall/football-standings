import data from "../data.json";

export const getFootballStandingsData = async () => {
  const leagues = data.leagues;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const dataPromises = leagues.map(async (item, index) => {
    let apiUrl = new URL(String(process.env.FOOTBALL_STANDINGS_API));

    apiUrl.searchParams.append("league", String(item.id));
    apiUrl.searchParams.append("season", String(currentYear));

    const headers = {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": String(process.env.FOOTBALL_STANDINGS_API_KEY),
    };

    try {
      const res = await fetch(apiUrl, {
        method: "GET",
        headers: headers,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const jsonData = await res.json();
      return jsonData;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  });
  let allRankedLeagues = await Promise.all(dataPromises);
  return allRankedLeagues;
};
