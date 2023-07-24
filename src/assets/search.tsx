import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none" ref={ref} {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="m20.7 19.5-6-6a8.1 8.1 0 0 0 2-5.3c0-4.5-3.8-8.2-8.4-8.2A8.3 8.3 0 0 0 0 8.2a8.3 8.3 0 0 0 13.5 6.5l6 6c.4.4.9.4 1.2 0 .4-.3.4-.9 0-1.2ZM1.7 8.2c0-3.5 3-6.4 6.6-6.4 3.6 0 6.5 2.9 6.5 6.4a6.5 6.5 0 0 1-13 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h21v21H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
