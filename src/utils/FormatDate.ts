type RelativeTimeFormatUnit =
  | 'year'
  | 'years'
  | 'quarter'
  | 'quarters'
  | 'month'
  | 'months'
  | 'week'
  | 'weeks'
  | 'day'
  | 'days'
  | 'hour'
  | 'hours'
  | 'minute'
  | 'minutes'
  | 'second'
  | 'seconds'

interface DateUnitI {
  day: number
  hour: number
  minute: number
  second: number
}

const DATE_UNITS: DateUnitI = {
	day: 86400,
	hour: 3600,
	minute: 60,
	second: 1,
}

const getSecondsDiff = (timestamp: Date) => {
	const now = new Date()
	const diff = now.getTime() - timestamp.getTime()
	return Math.floor(diff / 1000)
}

const getUnitAndValueDate = (secondsElapsed: number) => {
	let unit: RelativeTimeFormatUnit = 'second'
	let value: number = secondsElapsed
	for (const [unitName, seconds] of Object.entries(DATE_UNITS)) {
		if (secondsElapsed > seconds) {
			unit = unitName as RelativeTimeFormatUnit
			value = Math.floor(secondsElapsed / seconds) * -1
			break
		}
	}
	return { unit, value }
}

const getTimeAgo = (timestamp: Date) => {
	const rtf = new Intl.RelativeTimeFormat()
	const secondsElapsed = getSecondsDiff(timestamp)
	const { value, unit } = getUnitAndValueDate(secondsElapsed)
	return rtf.format(value, unit)
}

export default getTimeAgo
