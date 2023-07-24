import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={7} fill="none" ref={ref} {...props}>
    <path stroke="#FCFCFC" d="m.4.6 5.8 5.9" />
    <path stroke="#fff" d="M5.6 6.3 11.3.6" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
