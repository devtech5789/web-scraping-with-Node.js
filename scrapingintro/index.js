const request = require('request-promise')
const fs = require('fs')
const cheerio = require('cheerio')


async function main() {
    const html = await request.get('https://www.facebook.com/')
    fs.writeFileSync('./test.html', html)

    // const $ = await cheerio.load(html)
    // $('h2').each((index, element) => {
        // console.log($(element).text())
    // })
}

main()
