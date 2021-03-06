export default {
  weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  getDays (year) {
    if (this.isLeap(year)) return [31, 29, 31, 30, 31, 30, 31, 31, 30, 30, 30, 31]  // 闰年
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 30, 30, 31]   // 平年
  },
  // 闰年
  isLeap (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  },

  getStart (date) {
    date.setDate(1)
    return date.getDay()
  },
  /**
   * 初始化
   * @param{object} opts 用户提供的初始化信息
   */
  initDate (opts) {
    const dateNow = new Date()
    const year = dateNow.getFullYear()
    const month = dateNow.getMonth()  // from 0 to 11

    return {
      year: year,
      month: month,
      day: dateNow.getDate(),
      hours: dateNow.getHours(),
      mintues: dateNow.getMinutes(),
      seconds: dateNow.getSeconds(),
      days: this.getDays(year)[month],
      weekdays: this.weekdays,
      weekday: dateNow.getDay()
    }
  }
}
