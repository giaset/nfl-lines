const request = require('request');
const cheerio = require('cheerio');

request('http://www.footballlocks.com/nfl_odds.shtml', (err, resp, html) => {
  const $ = cheerio.load(html);
  const tables = $('table');
  tables.each(i => {
    const table = tables[i];
    console.log(table.attribs.colspan);
  });
  /*tables.filter(table => {
    return table.attr('colspan') == 6;
  });*/
});
