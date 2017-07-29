import test from 'ava';
import m from './';

test('wikipic.current()', async t => {
	const current = await m();

	t.is(current.image, 'https://upload.wikimedia.org/wikipedia/en/7/70/Padlock-pink.svg/20px-Padlock-pink.svg.png');
	t.is(current.name, '20px-Padlock-pink.svg.png');
	t.is(current.data, 'Centaurea jacea\nPhotograph: Uoaei1\nArchive – More featured pictures...');
});

test('wikipic.day()', async t => {
	const day = await m('2014-10-10');

	t.is(day.image, 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Soursop%2C_Annona_muricata.jpg/450px-Soursop%2C_Annona_muricata.jpg');
	t.is(day.name, '450px-Soursop%2C_Annona_muricata.jpg');
	t.is(day.data, 'The soursop is the fruit of Annona muricata, an evergreen from Central and South America adapted to areas of high humidity and relatively warm winters. The taste has been described as a combination of strawberry and pineapple, with sour citrus flavour notes contrasting with an underlying creamy flavour reminiscent of coconut or banana.');
});
