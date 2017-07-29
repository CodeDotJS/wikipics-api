'use strict';

const wikipics = require('./index.js');

wikipics().then(res => {
	console.log(res);
});

wikipics('2014-10-10').then(res => {
	console.log(res);
});
