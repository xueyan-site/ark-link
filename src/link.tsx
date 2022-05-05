import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import cn from 'classnames'
import styles from './link.scss'
import { Ellipsis } from 'xueyan-react-ellipsis'
import type { EllipsisProps } from 'xueyan-react-ellipsis'

export interface LinkProps {
  /** 缩略参数 */
  ellipsis?: EllipsisProps
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 文本内容 */
  children?: React.ReactNode
  /** 图片src */
  src?: string
  /** 图标 */
  icon?: React.ReactNode
  /** 图标和内容的空隙 */
  spacing?: string | number;
  /** 标题 */
  title?: string
  /** 超链接地址 */
  href?: string
  /** 超链接跳转方式（默认_blank） */
  target?: React.HTMLAttributeAnchorTarget
  /** 点击时触发 */
  onClick?: React.MouseEventHandler<HTMLElement>
}

export interface LinkRef {
  /** 根节点 */
  rootNode: HTMLAnchorElement | null
}

export const Link = forwardRef<LinkRef, LinkProps>(({
  ellipsis,
  className,
  style,
  children,
  src,
  icon,
  spacing,
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
        (href || onClick) && styles.canclick
      )}
      style={style}
      href={href}
      title={title}
      target={target || '_blank'}
      onClick={onClick}
    >
      {children ? (
        <div className={styles.wrapper}>
          {icon && (
            <div 
              className={styles.icon}
              style={{ marginRight: spacing }}
            >{icon}</div>
          )}
          <Ellipsis 
            {...ellipsis} 
            className={cn(styles.content, ellipsis?.className)}
          >
            {children}
          </Ellipsis>
        </div>
      ) : src ? (
        <img className={styles.image} src={src} />
      ) : null}
    </a>
  )
})
