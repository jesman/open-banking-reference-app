import React from 'react'
import { View } from 'react-native'
import { IconProps } from '../common'

const SvgComponent = ({ fill = '#2165E2', ...props }: IconProps) => (
  <View style={{ transform: [{ rotate: '-45deg' }] }}>
    <svg width="20px" height="20px" viewBox="0 0 20 20" {...props}>
      <title>Icon/ic-x</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <path
          d="M7.14814815,9.85454545 L2,4.8 L4.85185185,2 L10,7.05454545 L15.1481481,2 L18,4.8 L12.8518519,9.85454545 L13,10 L12.8518519,10.1454545 L18,15.2 L15.1481481,18 L10,12.9454545 L4.85185185,18 L2,15.2 L7.14814815,10.1454545 L7,10 L7.14814815,9.85454545 Z"
          id="path-1"
        />
      </defs>
      <g id="Icon/ic-x" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <use id="Combined-Shape" fill={fill} xlinkHref="#path-1" />
      </g>
    </svg>
  </View>
)

export default SvgComponent
