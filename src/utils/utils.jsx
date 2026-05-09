/**
 * Return monday and sunday date of the week
 * @param date
 * @returns {{monday: Date, sunday: Date}}
 */
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

/**
 * Return average km for the range of 4 weeks
 * @param start
 * @param end
 * @param runningData
 * @returns {number}
 */
export function getAverageKmForRange(start, end, runningData) {

    const filtered = runningData.filter((d) => {
        const date = new Date(d.date);
        return date >= start && date <= end;
    });
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, d) => sum + d.distance, 0);

    return Number((total / filtered.length).toFixed(1));
}

/**
 * Return the average heart rate for the range (a week)
 * @param start
 * @param end
 * @param runningData
 * @returns {number}
 */
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

/**
 * Return running data corresponding to the range date
 * @param weeks
 * @param runningData
 * @returns {*}
 */
export function buildWeeklyKmData(weeks,runningData) {

    return weeks.map((w, i) => ({
        name: `S${i + 1}`,
        km: getKmForWeek(w.start, w.end, runningData),
        startDate: w.start,
        endDate: w.end,
    }));
}

/**
 * Return the start of the day for the date
 * @param date
 * @returns {Date}
 */
export function startOfDay(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
}

/**
 * Return the end of the day for the date
 * @param date
 * @returns {Date}
 */
export function endOfDay(date) {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
}

/**
 * Return sum of the km for a week
 * @param start
 * @param end
 * @param runningData
 * @returns {string}
 */
export function getKmForWeek(start, end, runningData) {

    const normalizedStart = startOfDay(start);
    const normalizedEnd = endOfDay(end);


    return runningData
        .filter((d) => {

            const date = new Date(d.date);

            return date >= normalizedStart &&
                date <= normalizedEnd;
        })
        .reduce((sum, d) => sum + Number(d.distance), 0).toFixed(2);
}

/**
 * Return sum of duration activity for the week
 * @param start
 * @param end
 * @param runningData
 * @returns {*}
 */
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

/**
 * Return the total duration of activities of all runs
 * @param runningData
 * @returns {{hours: string, minutes: string}}
 */
export function getDuration(runningData) {

    const totalMinutes = runningData
        .reduce((sum, d) => sum + Number(d.duration), 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return {
        hours: `${hours}h`,
        minutes: `${minutes.toString().padStart(2, "0")}min`
    };
}

/**
 * Return total calories burnt
 * @param runningData
 * @returns {*}
 */
export function getCaloriesBurnt(runningData) {

    return runningData
        .reduce((sum, d) => sum + Number(d.caloriesBurned), 0);
}

/**
 * Return total session of running
 * @param runningData
 * @returns {*}
 */
export function getNbrOfSessions(runningData) {

    return runningData.length;
 }

/**
 * Return total of rest days from the account creation
 * @param runningData
 * @returns {number}
 */
export function getRestDays(runningData) {

    if (!runningData?.length) return 0;

    const sorted = runningData
        .map(d => new Date(d.date))
        .sort((a, b) => a - b);

    const start = sorted[0];
    const end = sorted[sorted.length - 1];

    const totalDays =
        Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    return totalDays - runningData.length;
}

/**
 * Return the number of run of the week
 * @param start
 * @param end
 * @param runningData
 * @returns {*}
 */
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

/**
 * Return heartrate data for the week
 * @param start
 * @param runningData
 * @returns {{name: *, minbpm, maxbpm}[]}
 */
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