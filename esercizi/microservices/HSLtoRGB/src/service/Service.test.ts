import chai from 'chai';
import {convert} from './Service';
import { hsl2rgbTestData } from "../../../commons/src/test-data/colors"

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', async() => {
    hsl2rgbTestData.forEach(async(test) => {
        it(`test case description`, async() => {
            let result = await convert(test.hslValue);
            result.should.deep.equal(test.rgbValue);
        });
    });
});
