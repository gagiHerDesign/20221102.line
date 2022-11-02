import axios from 'axios'
import * as cheerio from 'cheerio'

export default async (event) => {
  try {
    const { data } = await axios.get('https://ani.gamer.com.tw/animeVideo.php?sn=31692')
    const $ = cheerio.load(data)
    const score = $('.score-overall-number').text() || '目前無此動畫'
    console.log(score)
  } catch (error) {
    console.log(error)
  }
}
