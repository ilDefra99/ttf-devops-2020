import colorConverter from 'color-convert'
import { TtfHsl, TtfHex } from "../../../commons/src/model/Color"

export function convert(color: TtfHsl): TtfHex {
    const colorToConvert: TtfHsl = color;
    const convertedColor = colorConverter.hsl.hex([colorToConvert.hue,colorToConvert.saturation,colorToConvert.lightness]);
    return { hex:convertedColor } as TtfHex;
}

