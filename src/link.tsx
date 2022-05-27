import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './link.scss'

export interface LinkProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 禁用 */
  disabled?: boolean
  /** 文本内容 */
  children?: React.ReactNode
  /** 图片src */
  src?: string
  /** 标题 */
  title?: string
  /** 超链接跳转方式（默认_blank） */
  target?: React.HTMLAttributeAnchorTarget
  /** 超链接地址 */
  href?: string
  /** 点击时触发（若有href，则不生效） */
  onClick?: React.MouseEventHandler<HTMLElement>
}

export interface LinkRef {
  /** 根节点 */
  rootNode: HTMLAnchorElement | null
}

export const Link = forwardRef<LinkRef, LinkProps>(({
  className,
  style,
  disabled,
  children,
  src,
  title,
  href,
  target,
  onClick
}, ref) => {
  const rootRef = useRef<HTMLAnchorElement>(null)

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  return (
    <a
      ref={rootRef}
      className={cn(
        className, 
        styles.xrlink, 
        href && styles.anchor,
        disabled && styles.disabled
      )}
      style={style}
      href={disabled ? undefined : href}
      title={title}
      target={target || '_blank'}
      onClick={(disabled || href) ? undefined : onClick}
    >
      {children ? children : src ? (
        <img className={styles.image} src={src} />
      ) : null}
    </a>
  )
})
