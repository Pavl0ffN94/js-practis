export async function getAddress(ip = "8.8.8.8") {
  const response = await fetch(`
  https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_hg128EJnaxGK8Aj0MU39AD15yDsNY&ipAddress=${ip}`);

  return await response.json();
}
