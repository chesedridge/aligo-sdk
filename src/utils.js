import axios from "axios"

class Utils {
  static padtwo(number) {
    return number.toString().length === 1 ? `0${number}` : number.toString()
  }

  static sendFormPost = async (url, body) => {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })

    return res.data
  }
}

export default Utils
