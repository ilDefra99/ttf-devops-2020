import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfRgb, TtfHex } from "../../../commons/src/model/Color"

//TODO
class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as TtfHex;
            const convertedColor: TtfRgb = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
