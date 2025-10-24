import { baseUrl, maxItensRepoAndEvents } from "../variables.js";

async function getEvents(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/events/public?per_page=${maxItensRepoAndEvents}`
  );
  return await response.json();
}

export { getEvents };
