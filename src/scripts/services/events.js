import { baseUrl, maxItensRepoAndEvents } from "../variables.js";

async function getEvents(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events`);
  const events = await response.json();
  return events
    .filter(
      (element) =>
        element.type === "PushEvent" || element.type === "CreateEvent"
    )
    .slice(0, maxItensRepoAndEvents);
}

export { getEvents };
