import colorConverter from 'color-convert'
import { TtfRgb, TtfHex } from "../../../commons/src/model/Color"

export function convert(color: TtfHex): TtfRgb {
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.rgb(colorToConvert.hex);
    return { red:convertedColor[0] ,green:convertedColor[1] , blue:convertedColor[2] } as TtfRgb;
}

