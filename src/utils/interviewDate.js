function parseDate(value) {
  if (value === null || value === undefined || value === "") return null;

  const date =
    typeof value === "number" ||
    (typeof value === "string" && /^\d+$/.test(value))
      ? new Date(Number(value))
      : new Date(value);

  return Number.isNaN(date.getTime()) ? null : date;
}

export function getInterviewDate(candidate) {
  const createdAt = parseDate(candidate?.createdAt);
  if (createdAt) return createdAt;

  const messageDates = (candidate?.messages || [])
    .map((message) => parseDate(message.createdAt))
    .filter(Boolean)
    .sort((a, b) => a - b);

  return messageDates[0] || parseDate(candidate?.id);
}
