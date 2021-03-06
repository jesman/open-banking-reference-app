import React from 'react'
import Svg, { Defs, Path, G, Mask, Use } from 'react-native-svg'
import { IconProps } from '../common'

const SvgComponent = ({ fill1 = '#FA775E', fill2 = '#dbe3e3', ...props }: IconProps) => (
  <Svg width={36} height={36} viewBox="0 0 36 36" {...props}>
    <Defs>
      <Path
        id="prefix__a"
        d="M21.686 0H1.314C.588 0 0 .597 0 1.333v16c0 .737.588 1.334 1.314 1.334h7.687l7.72 5.221a.653.653 0 0 0 .675.033.668.668 0 0 0 .347-.588v-4.666h3.943c.726 0 1.314-.597 1.314-1.334v-16C23 .597 22.412 0 21.686 0z"
      />
      <Path
        id="prefix__c"
        d="M23.684 0H1.316C.589 0 0 .589 0 1.316v15.79c0 .726.589 1.315 1.316 1.315h3.947v5.921a.659.659 0 0 0 1.04.535l9.04-6.456h8.341c.727 0 1.316-.589 1.316-1.316V1.315C25 .59 24.411 0 23.684 0z"
      />
      <Mask x={0} y={0} width="100%" height="100%" id="prefix__b" fill="#fff">
        <Use href="#prefix__a" />
      </Mask>
      <Mask x={0} y={0} width="100%" height="100%" id="prefix__d" fill="#fff">
        <Use href="#prefix__c" />
      </Mask>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <G transform="translate(10 8)">
        <Use fill={fill2} href="#prefix__a" />
        <G fill={fill2} fillRule="nonzero" mask="url(#prefix__b)">
          <Path d="M-10-8h86v76h-86z" />
        </G>
      </G>
      <G transform="translate(3 4)">
        <Use fill={fill1} href="#prefix__c" />
        <G fill={fill1} fillRule="nonzero" mask="url(#prefix__d)">
          <Path d="M-28-24h86v76h-86z" />
        </G>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
