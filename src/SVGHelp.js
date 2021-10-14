// import React from "react"; 
import * as React from "react"
import Svg, {
  Circle, Path} from "react-native-svg"
import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window'); 

export function Warna(){
  return Color = {
    Primary: '#CC4645',
    Primary70: '#8F3130',
    AccentRed: '#DD868C',
    DarkRed: '#9C3636',
    SecYellow: '#FDC667',
    ThirdYellow: '#FDD898',
    ThirdPusp: '#9C3636',
    FifthGree: '#03B77C',
    Black: '#000',
    Placeholder: '#CCCCCC',
    background: '#E5E5E5',
    GreenSuccess: '#43A047',
    backgroundBase: '#F7F7F7',
  }
}

 
export const IconEd = ({ line, size}) => {
  return ( 
    <Svg
      width={16}
      height={65}
      viewBox="0 0 16 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" 
    >
      <Path
        stroke="#000"
        strokeOpacity={0.42}
        strokeWidth={4}
        d="M8.00001 16L8.00001 25.3333"
      />
      <Path
        stroke="#000"
        strokeOpacity={0.42}
        strokeWidth={4}
        d="M8 0L8 9.33333"
      />
      <Path
        stroke="#000"
        strokeOpacity={0.42}
        strokeWidth={4}
        d="M8.00001 32.3333L8.00001 41.6666"
      />
      <Circle cx={8} cy={57} r={8} fill="#949494" />
    </Svg>
  )
} 
