export default function formatDate(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getUTCMonth() + 1;
  const day = newDate.getDate();
  return `${year}-${month}-${day}`;
}
