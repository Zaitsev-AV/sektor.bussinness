import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  mt?: number
}>
export const Page: FC<Props> = ({ children, mt = '2rem' }) => {
  return <div style={{ marginTop: mt }}>{children}</div>
}
