export default function ShamsiDate(date) {
  const options = {

  }
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
