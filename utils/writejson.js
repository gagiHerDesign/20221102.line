import fs from 'fs'

export default (json, filename) => {
  // 控制debug用的開關(要記得去.env那邊改)
  if (!process.env.WRITEJSON !== 'true') return

  const exists = fs.existsSync('./dump')
  if (!exists) {
    fs.mkdirSync('./dump')
  }
  fs.writeFileSync(`./dump/${filename}.json`, JSON.stringify(json, null, 2))
}
