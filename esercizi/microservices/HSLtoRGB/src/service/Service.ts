import colorConverter from 'color-convert'
import { TtfHsl, TtfRgb } from "../../../commons/src/model/Color"
import fetch from "node-fetch";

export async function convert(color: TtfHsl): Promise<TtfRgb> {
    const colorToConvert: TtfHsl = color;
    const convertedColor = await callApis(colorToConvert)
    return convertedColor as TtfRgb;
}

const callApis = async(color: TtfHsl):Promise<any>=>{
    try{
        let response = await fetch("http://HSLtoHEX:3000?color="+JSON.stringify(color))
        let data = await response.json();
        try{
            let response2 = await fetch("http://HEXtoRGB:3000?color="+JSON.stringify(data))
            let data2 = await response2.json();
            return data2
        }catch(err2){console.error(err2)}
    }catch(err){console.error(err)}
}