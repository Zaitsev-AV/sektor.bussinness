import { ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { Search } from '@/assets'
import { Typography } from '@/components'
import { Box } from '@/components/ui/Box/Box.tsx'

export type InputProps = {
  containerProps?: ComponentProps<'div'>
  label?: string
  inputType: 'text' | 'search'
  error?: string
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, inputType, disabled, error, containerProps, ...rest }, ref) => {
    const color = disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'
    const classNames = {
      input: clsx(s.input, inputType === 'search' && s.search, error && s.inputError),
      container: clsx(s.inputContainer),
      root: clsx(s.root, className, containerProps?.className),
      search: clsx(s.searchIcon),
      error: clsx(s.error),
      label: clsx(s.label),
    }
    const leftIcon = inputType === 'search' && (
      <div className={classNames.search}>{<Search color={color} />}</div>
    )

    return (
      <Box className={classNames.root}>
        <Typography
          className={classNames.label}
          variant="subtitle1"
          color="secondary"
          unselectable="on"
        >
          {label}
          {/*<div className={cNames.error}>{errorMessage}</div>*/}
        </Typography>
        <Box className={classNames.container}>
          <input
            ref={ref}
            disabled={disabled}
            className={classNames.input}
            type={inputType}
            placeholder={'text'}
            {...rest}
          />
          {leftIcon}
        </Box>
      </Box>
    )
  }
)
