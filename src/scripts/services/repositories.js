import { baseUrl, maxItensRepoAndEvents } from "../variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${maxItensRepoAndEvents}&sort=created`
  );
  return await response.json();
}

export { getRepositories };
