export const chooseEmoji = (status: string) => {
  switch (status) {
    case "Contingent":
      return "🤝";
    case "Listed":
      return "📝";
    case "Listing Removed":
      return "✋";
    case "Price Changed":
      return "📉";
    case "Relisted":
      return "🧲";
    case "Sold":
      return "💰";
    default:
      return "😡";
  }
};