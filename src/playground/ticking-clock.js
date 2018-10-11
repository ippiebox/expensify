// Our challenge is to build a ticking clock. The clock needs to display hours, minutes,
// seconds and time of day in civilian time. Each field must always have double digits,
// meaning leading zeros need to be applied to single digit values like 1 or 2. The clock
// must also tick and change the display every second.

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )

// Takes a date object and returns a object for clock time that contains hours minutes and seconds.
const serializeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
})

// Takes the clock time object and returns an object where hours are converted to civilian time.
// For example: 1300 becomes 1 o’clock
const civilianHours = clockTime => ({
  ...clockTime,
  hours: (clockTime.hours > 12) ?
    clockTime.hours - 12 :
    clockTime.hours
})

// Takes the clock time object and appends time of day, AM or PM, to that object.
const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

// Takes a target function and returns a function that will send a time to the target.
// In this example the target will be console.log.
const display = target => time => target(time)

// Takes a template string and uses it to return clock time formatted based upon the
// criteria from the string. In this example, the template is “hh:mm:ss tt”. From ther,
// formatClock will replaces the placeholders with hours, minutes, seconds, and
// time of day.
const formatClock = format =>
  time =>
    format.replace("hh", time.hours)
      .replace("mm", time.minutes)
      .replace("ss", time.seconds)
      .replace("tt", time.ampm)

// Takes an object’s key as an argument and prepends a zero to the value stored
// under that objects key. It takes in a key to a specific field and prepends values
// with a zero if the value is less than 10.
const prependZero = key =>
  clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
      "0" + clockTime[key] :
      clockTime[key]
})

// A single function that will take clock time as an argument and transforms it into
// civilian time by using both civilian hours.
const convertToCivilianTime = clockTime =>
  compose(
    appendAMPM,
    civilianHours
  )(clockTime)

// A single function that will take civilian clock time and make sure the hours,
// minutes, and seconds display double digits by prepending zeros where needed.
const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime)

// Starts the clock by setting an interval that will invoke a callback every second.
// The callback is composed using all of our functions. Every second the console is
// cleared, currentTime obtained, converted, civilianized, formatted, and displayed.
const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,         // 2018-10-02T22:10:41.999Z
      serializeClockTime,     // { hours: 18, minutes: 10, seconds: 42 }
      convertToCivilianTime,  // { hours: 6, minutes: 10, seconds: 42, ampm: 'PM' }
      doubleDigits,           // { hours: '06', minutes: 10, seconds: 42, ampm: 'PM' }
      formatClock("hh:mm:ss tt"), // 06:10:42 PM
      display(log)
    ),
    oneSecond()
  )

//startTicking()

console.log(getCurrentTime())
console.log(serializeClockTime(getCurrentTime()))
console.log(convertToCivilianTime(serializeClockTime(getCurrentTime())))
console.log(doubleDigits(convertToCivilianTime(serializeClockTime(getCurrentTime()))))
console.log(formatClock("hh:mm:ss tt")(doubleDigits(convertToCivilianTime(serializeClockTime(getCurrentTime())))))
