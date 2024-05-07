import axios from "axios"

export class CommonUtil {
  static padtwo(number: number): string {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  static formatDate(date: Date, formatStr: string): string {
    const year = date.getFullYear().toString()
    const month = this.padtwo(date.getMonth() + 1)
    const day = this.padtwo(date.getDate())
    const hour = this.padtwo(date.getHours())
    const minute = this.padtwo(date.getMinutes())
    const second = this.padtwo(date.getSeconds())

    return formatStr
      .replace("YYYY", year)
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hour)
      .replace("mm", minute)
      .replace("ss", second)
  }

  static async sendFormPost(url: string, body: any): Promise<any> {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })

    return res.data
  }

  static async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
