const { expect } = require('chai');

const pairsMaker = require('../problems/01-pairs-maker');

describe('pairsMaker()', function () {
	it('returns a 2d array of pairs of strings', function () {
		const inputArrOne = ['Star', 'Wars', 'Force'];
		const inputArrTwo = ['Galactic', 'Empire', 'Rebel', 'Alliance'];

		const outputArrOne = [
			['Star', 'Wars'],
			['Star', 'Force'],
			['Wars', 'Force'],
		];
		const outputArrTwo = [
			['Galactic', 'Empire'],
			['Galactic', 'Rebel'],
			['Galactic', 'Alliance'],
			['Empire', 'Rebel'],
			['Empire', 'Alliance'],
			['Rebel', 'Alliance'],
		];

		expect(pairsMaker(inputArrOne)).to.deep.equal(outputArrOne);
		expect(pairsMaker(inputArrTwo)).to.deep.equal(outputArrTwo);
	});

	it('returns a 2d array of pairs of integers', function () {
		const inputArrOne = [1, 2, 3, 4];
		const inputArrTwo = [-2, -1, 0, 1, 2];

		const outputArrOne = [
			[1, 2],
			[1, 3],
			[1, 4],
			[2, 3],
			[2, 4],
			[3, 4],
		];
		const outputArrTwo = [
			[-2, -1],
			[-2, 0],
			[-2, 1],
			[-2, 2],
			[-1, 0],
			[-1, 1],
			[-1, 2],
			[0, 1],
			[0, 2],
			[1, 2],
		];

		expect(pairsMaker(inputArrOne)).to.deep.equal(outputArrOne);
		expect(pairsMaker(inputArrTwo)).to.deep.equal(outputArrTwo);
	});

	it('returns a 2d array of pairs of mixed data', function () {
		const inputArrOne = [12, 'Jedi', 'Ewoks'];
		const inputArrTwo = ['Sith', 7, 'Starship', 11];

		const outputArrOne = [
			[12, 'Jedi'],
			[12, 'Ewoks'],
			['Jedi', 'Ewoks'],
		];
		const outputArrTwo = [
			['Sith', 7],
			['Sith', 'Starship'],
			['Sith', 11],
			[7, 'Starship'],
			[7, 11],
			['Starship', 11],
		];

		expect(pairsMaker(inputArrOne)).to.deep.equal(outputArrOne);
		expect(pairsMaker(inputArrTwo)).to.deep.equal(outputArrTwo);
	});
});
