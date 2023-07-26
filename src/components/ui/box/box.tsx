import { createElement, forwardRef, MouseEventHandler, ReactNode } from 'react'

type BoxComponent = 'div' | 'header' | 'footer' | 'nav' | 'aside' | 'section'

type BoxProps = {
  className?: string
  component?: BoxComponent
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
}

export const Box = forwardRef<unknown, BoxProps>(
  ({ component, className, onClick, children }, ref) =>
    createElement(component || 'div', { className, onClick, ref }, children)
)
