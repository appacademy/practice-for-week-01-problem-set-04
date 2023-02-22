const { expect } = require('chai');

const zip = require('../problems/05-zip');

describe('zip()', function () {
	it('returns a two dimensional array of integers', function () {
		const inputArrOne = [11, 2, 4, 3, 9, 1];
		const inputArrTwo = [1, 2, 3, 4, 6, 1];

		const outputOne = [
			[11, 1],
			[2, 2],
			[4, 3],
			[3, 4],
			[9, 6],
			[1, 1],
		];
		const outputTwo = [
			[1, 11],
			[2, 2],
			[3, 4],
			[4, 3],
			[6, 9],
			[1, 1],
		];

		expect(zip(inputArrOne, inputArrTwo)).to.deep.equal(outputOne);
		expect(zip(inputArrTwo, inputArrOne)).to.deep.equal(outputTwo);
	});

	it('returns a two dimensional array of strings', function () {
		const inputArrOne = ['Star', 'Obi', 'Sith', 'The'];
		const inputArrTwo = ['Wars', 'Wan', 'Lord', 'Force'];

		const outputOne = [
			['Star', 'Wars'],
			['Obi', 'Wan'],
			['Sith', 'Lord'],
			['The', 'Force'],
		];
		const outputTwo = [
			['Wars', 'Star'],
			['Wan', 'Obi'],
			['Lord', 'Sith'],
			['Force', 'The'],
		];

		expect(zip(inputArrOne, inputArrTwo)).to.deep.equal(outputOne);
		expect(zip(inputArrTwo, inputArrOne)).to.deep.equal(outputTwo);
	});

	it('returns a two dimensional array of mixed data', function () {
		const inputArrOne = ['Star', 2, 'Sith', 4];
		const inputArrTwo = [1, 'Wan', 3, 'Force'];

		const outputOne = [
			['Star', 1],
			[2, 'Wan'],
			['Sith', 3],
			[4, 'Force'],
		];
		const outputTwo = [
			[1, 'Star'],
			['Wan', 2],
			[3, 'Sith'],
			['Force', 4],
		];

		expect(zip(inputArrOne, inputArrTwo)).to.deep.equal(outputOne);
		expect(zip(inputArrTwo, inputArrOne)).to.deep.equal(outputTwo);
	});
});
