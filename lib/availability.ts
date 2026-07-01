export const availabilityHours = {
  start: "3:00 PM",
  end: "9:00 PM",
  start24: "15:00",
  end24: "21:00",
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST (India)",
} as const;

export const availabilityDays = [
  { key: "monday", label: "Monday", short: "Mon", dayIndex: 1, schemaDay: "Monday" },
  { key: "tuesday", label: "Tuesday", short: "Tue", dayIndex: 2, schemaDay: "Tuesday" },
  { key: "wednesday", label: "Wednesday", short: "Wed", dayIndex: 3, schemaDay: "Wednesday" },
  { key: "thursday", label: "Thursday", short: "Thu", dayIndex: 4, schemaDay: "Thursday" },
  { key: "friday", label: "Friday", short: "Fri", dayIndex: 5, schemaDay: "Friday" },
  { key: "saturday", label: "Saturday", short: "Sat", dayIndex: 6, schemaDay: "Saturday" },
  { key: "sunday", label: "Sunday", short: "Sun", dayIndex: 0, schemaDay: "Sunday" },
] as const;

export const availabilitySlots = [
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
] as const;

export function openingHoursJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OpeningHoursSpecification",
    dayOfWeek: availabilityDays.map((d) => d.schemaDay),
    opens: availabilityHours.start24,
    closes: availabilityHours.end24,
  };
}
