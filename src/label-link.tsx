import React, { forwardRef } from 'react'
import cn from 'classnames'
import styles from './label-link.scss'
import { Ellipsis } from 'ark-ellipsis'
import { Link } from './link'
import type { LinkProps, LinkRef } from './link'
import type { EllipsisProps } from 'ark-ellipsis'

export interface LabelLinkProps extends LinkProps {
  /** 缩略组件参数 */
  ellipsis?: EllipsisProps
  /** 图标 */
  icon?: React.ReactNode
  /** 图标和内容的空隙 */
  spacing?: React.CSSProperties['marginRight']
}

export const LabelLink = forwardRef<LinkRef, LabelLinkProps>(({
  ellipsis,
  icon,
  spacing,
  children,
  ...props
}, ref) => {
  return (
    <Link ref={ref} {...props}>
      {children && (
        <div className={styles.xrlabellinkwrapper}>
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
      )}
    </Link>
  )
})
