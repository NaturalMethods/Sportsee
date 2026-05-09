/**
 * Return a date with added days
 * @param date
 * @param days
 * @returns {Date}
 */
export function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}


/**
 * Return a short date format (ex: 27 avr)
 * @param date
 * @returns {string|null}
 */
export function formatDateShort(date) {
    if (!date) return null;

    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "short",
    })
        .format(new Date(date))
        .replace(".", "");
}

/**
 * Return a 2 digit date format
 * @param date
 * @returns {string}
 */
export function format2DigitDate(date) {
    if (!date) return "";

    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
    }).format(new Date(date))
        .replace("/", ".");
}

/**
 * Return a 4 digit date format
 * @param date
 * @returns {string}
 */
export function format4DigitDate(date) {
    if (!date) return "";

    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(new Date(date))
}
