
// utils/date.js
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



// Return current week monday date and sunday date
export function getWeekRange(date = new Date()) {
    const d = new Date(date);

    const day = d.getDay(); // 0 (dimanche) → 6 (samedi)
    const diffToMonday = (day === 0 ? -6 : 1 - day);

    const monday = new Date(d);
    monday.setDate(d.getDate() + diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    return {
        monday,
        sunday,
    };
}

export function getAverageKmForRange(start, end, runningData) {

    const filtered = runningData.filter((d) => {
        const date = new Date(d.date);
        return date >= start && date <= end;
    });
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, d) => sum + d.distance, 0);

    return Number((total / filtered.length).toFixed(2));
}

export function getAverageBpmForRange(start, end, runningData) {

    const normalizedStart = startOfDay(start);
    const normalizedEnd = endOfDay(end);

    const filtered = runningData.filter((d) => {

        const date = new Date(d.date);

        return (
            date >= normalizedStart &&
            date <= normalizedEnd &&
            d.heartRate?.average != null
        );
    });

    if (filtered.length === 0) return 0;

    const total = filtered.reduce(
        (sum, d) => sum + Number(d.heartRate.average),
        0
    );

    return Math.round(total / filtered.length);
}

export function buildWeeklyKmData(weeks,runningData) {

    return weeks.map((w, i) => ({
        name: `S${i + 1}`,
        km: getKmForWeek(w.start, w.end, runningData),
        startDate: w.start,
        endDate: w.end,
    }));
}

export function startOfDay(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
}

export function endOfDay(date) {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
}

// Calcule la somme des Kms de la semaine
export function getKmForWeek(start, end, runningData) {

    const normalizedStart = startOfDay(start);
    const normalizedEnd = endOfDay(end);


    return runningData
        .filter((d) => {

            const date = new Date(d.date);

            return date >= normalizedStart &&
                date <= normalizedEnd;
        })
        .reduce((sum, d) => sum + Number(d.distance), 0);
}

export function getWeekDuration(start, end, runningData) {

    const normalizedStart = startOfDay(start);
    const normalizedEnd = endOfDay(end);


    return runningData
        .filter((d) => {

            const date = new Date(d.date);

            return date >= normalizedStart &&
                date <= normalizedEnd;
        })
        .reduce((sum, d) => sum + Number(d.duration), 0);
}

export function getWeekNbrOfRun(start, end, runningData) {

    const normalizedStart = startOfDay(start);
    const normalizedEnd = endOfDay(end);

    return runningData
        .filter((d) => {

            const date = new Date(d.date);
            return date >= normalizedStart && date <= normalizedEnd;
        })
        .length;

}

export function buildWeeklyHeartRateData(start, runningData) {
    const days = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];
    const format = (d) => {
        return new Date(d).toISOString().slice(0, 10);
    };

    return days.map((dayName, index) => {
        const dayDate = new Date(start);


        dayDate.setDate(start.getDate() + index);

        const dayString = format(dayDate);

        const run = runningData.find((d) => {
            return format(d.date) === dayString;
        });

        return {
            name: dayName,
            minbpm: run?.heartRate?.min || 0,
            maxbpm: run?.heartRate?.max || 0,
        };
    });
}