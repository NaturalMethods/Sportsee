export function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}


// Return a short date format (ex: 27 avr)
export function formatDateShort(date) {
    if (!date) return null;

    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "short",
    })
        .format(new Date(date))
        .replace(".", "");
}
export function format2DigitDate(date) {
    if (!date) return "";

    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
    }).format(new Date(date))
        .replace("/", ".");
}
