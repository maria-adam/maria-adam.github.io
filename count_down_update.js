const intervalId = window.setInterval(() =>{
    console.log("tick");
    const period = countdown();
    
    document.getElementById('daysCount').innerHTML = period.beforeEvent ? period.days : 0;
    document.getElementById('hoursCount').innerHTML = allignTwoPlaces(period.beforeEvent ? period.hours : 0);
    document.getElementById('minutesCount').innerHTML = allignTwoPlaces(period.beforeEvent ? period.minutes : 0);
    document.getElementById('secondsCount').innerHTML = allignTwoPlaces(period.beforeEvent ? period.seconds : 0);
    
    // document.getElementById('countdown').innerHTML = make_countdown_message()
}, 1000);

//clearInterval(intervalId)

class Period {
    constructor(days, hours, minutes, seconds, beforeEvent) {
        this.days = days
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.beforeEvent = beforeEvent
    }
}

function countdown() {
    const today = new Date()
    const target = new Date(2023, 8, 30, 15, 0, 0, 0)
    return PeriodCalculator.calculate(today, target)
}

function allignTwoPlaces(val) {
    if (val >= 0 && val <= 9) {
        return '0' + val;
    }
    else {
        return val;
    }
}

class PeriodCalculator {
    static #SECOND_IN_MILIS = 1000
    static #ONE_MINUTE = 60
    static #ONE_HOUR = 60 * this.#ONE_MINUTE
    static #ONE_DAY = 24 * this.#ONE_HOUR

    static calculate(today, target) {
        const diff_milis = target.getTime() - today.getTime()

        const diff_secs = Math.abs(Math.floor(diff_milis / this.#SECOND_IN_MILIS))

        const days = Math.floor(diff_secs / this.#ONE_DAY)

        const diff_hours = diff_secs - (days * this.#ONE_DAY)
        const hours = Math.floor(diff_hours / this.#ONE_HOUR)

        const diff_minutes = diff_hours - (hours * this.#ONE_HOUR)
        const minutes = Math.floor(diff_minutes / this.#ONE_MINUTE)

        const seconds = diff_minutes - (minutes * this.#ONE_MINUTE)
        
        return new Period(days, hours, minutes, seconds, diff_milis > 0)
    }
}