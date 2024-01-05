export function getRandomValues(list = ["Canceled", "Processing", "Completed"]) {
  const statuses = list;
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}
