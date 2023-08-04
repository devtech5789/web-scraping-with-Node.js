const puppeteer = require('puppeteer');
const cherio = require('cherio');


async function main() {
    const browser = await puppeteer.launch({ 
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
     });
    const page = await browser.newPage();
    await page.goto("https://sfbay.craigslist.org/d/software-qa-dba-etc/search/sof");

    const html = await page.content();
    const $ = cherio.load(html);
    
    // $('.result-title').each((index, element) => console.log($(element).text()));
    // $('.result-title').each((index, element) => console.log($(element).attr('href')));

        const results = $('.result-info').map((index, element) => {
            const titleElement = $(element).find('.result-title');
            const timeElement = $(element).find('.result-date');
            const hoodElement = $(element).find('.result-hood');
            const title = $(titleElement).text();
            const url = $(titleElement).attr('href');
            const datePosted = new Date($(timeElement).attr('datetime'));
            const hood = $(hoodElement).text();
            return { title, url, datePosted, hood };
        }).get();  
        console.log(results);
}

main();