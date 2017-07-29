'use strict';

const got = require('got');
const cheerio = require('cheerio');

module.exports = day => {
	day = day || '';

	let url = `https://en.wikipedia.org/wiki/Template:POTD/${day}`;

	if (day === '') {
		url = `https://en.wikipedia.org/wiki/Template:POTD`;
	}

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const imgSource = `https:${$('img').attr('src').replace('thumb/', '').split('/300')[0]}`;
		const imgName = imgSource.split('/').slice(-1)[0];
		const imgData = $('.mw-body-content p').eq(0).text();
		return {
			image: imgSource,
			name: imgName,
			data: imgData
		};
	}).catch(err => {
		if (err) {
			err.message = 'Image not found!';
		}
		return err.message;
	});
};
