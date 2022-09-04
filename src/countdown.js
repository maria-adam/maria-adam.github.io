function make_countdown_message() {
    const period = countdown()
    return period.presentable()
}

function countdown() {
    const today = new Date()
    const target = new Date(2023, 8, 30, 15, 0, 0, 0)
    return PeriodCalculator.calculate(today, target)
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

class Period {
    constructor(days, hours, minutes, seconds, beforeEvent) {
        this.days = days
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
        this.beforeEvent = beforeEvent
    }

    presentable() {
        if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
            return 'Ślub zaczął się'
        }

        var period_message = '';
        if (this.days > 0) {
            period_message += `${this.days} dni `
        }

        if (this.hours > 0) {
            period_message += `${this.hours} godzin `
        }

        if (this.minutes > 0) {
            period_message += `${this.minutes} minut `
        }

        if (this.seconds > 0) {
            period_message += `${this.seconds} sekund `
        }

        if (this.beforeEvent) {
            return `Do ślubu pozostało ${period_message}`
        }
        else {
            return `Ślub odbył się ${period_message}temu`
        }
    }
}