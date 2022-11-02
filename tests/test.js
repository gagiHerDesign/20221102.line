// test是拿來測試用，看爬蟲有沒有爬對東西
// 這樣不用每一次都傳送line來測試(用console.log)
import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    const courses = []
    $('#general .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {
    console.log(error)
  }
}
main()
