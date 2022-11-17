import { Packer } from './Packer';

describe("Packer class", () => {
	test("has a pack() method", () => {
		expect(Packer.pack).not.toBeFalsy();
	});
});
