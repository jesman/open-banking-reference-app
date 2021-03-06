import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { IconProps } from '../common'

const SvgComponent = (props: IconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <G fill="#fff">
      <Path d="M11 11H0V0h11v11zM2 9h7V2H2v7zM24 11H13V0h11v11zm-9-2h7V2h-7v7zM11 24H0V13h11v11zm-9-2h7v-7H2v7zM24 20h-2v-5h-2v3h-6v-5h2v3h2v-3h6zM24 24H14v-4h2v2h8z" />
      <Path data-color="color-2" d="M4 4h3v3H4zM17 4h3v3h-3zM4 17h3v3H4z" />
    </G>
  </Svg>
)

export default SvgComponent
