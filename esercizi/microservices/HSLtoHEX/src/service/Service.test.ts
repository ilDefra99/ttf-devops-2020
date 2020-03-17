import chai from 'chai';
import {convert} from './Service';
import { hsl2hexTestData } from "../../../commons/src/test-data/colors"

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    hsl2hexTestData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.hslValue).should.deep.equal(test.hexValue);
        });
    });
});
