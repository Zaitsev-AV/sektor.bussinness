import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export interface TextProps<T extends ElementType> {
  as?: T
  variant?: 'title' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'toggle'
  children?: ReactNode
  className?: string
}

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant = 'subtitle1',
  ...restProps
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const classNames = clsx(s.text, s[variant], className)
  const Component = as || 'p'

  return <Component className={classNames} {...restProps} />
}
