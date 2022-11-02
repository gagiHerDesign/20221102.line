import axios from 'axios'
import * as cheerio from 'cheerio'

export default async (event) => {
  try {
    // 這樣會抓到網頁的html
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    // 開一個空陣列來存東西
    const courses = []
    // 對照網頁的東西來看
    // 針對每一個東西去跑迴圈
    $('#general .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    event.reply(courses.join('\n'))
  } catch (error) {

  }
}
