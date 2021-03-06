import React from 'react'
import { IconProps } from '../common'

const Budget = (props: IconProps) => (
  <svg width={36} height={36} viewBox="0 0 36 36" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#2165E2"
        d="M19.75 2a.75.75 0 0 0-.75.75v13.5c0 .414.335.75.75.75h13.5a.75.75 0 0 0 .75-.75C34 8.393 27.607 2 19.75 2z"
      />
      <path
        fill="#FA775E"
        d="M29.263 19.263H16.737V6.737A.737.737 0 0 0 16 6C8.28 6 2 12.28 2 20s6.28 14 14 14 14-6.28 14-14a.737.737 0 0 0-.737-.737z"
      />
    </g>
  </svg>
)

export default Budget
