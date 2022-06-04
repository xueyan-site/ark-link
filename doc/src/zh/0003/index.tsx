import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
标签链接组件，专用于渲染标签。

\`\`\`
type LabelLink = React.ForwardRefExoticComponent<
  LabelLinkProps & React.RefAttributes<LinkRef>
>
\`\`\`

> 其他类型：[LinkRef](?doc=0002#linkref)

## LinkProps

继承 [LinkProps](?doc=0002#linkprops) 全部属性

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| ellipsis | 缩略组件参数 | \`? EllipsisProps\` |  |
| icon | 图标 | \`? React.ReactNode\` |  |
| spacing | 图标和内容的空隙 | \`? React.CSSProperties['marginRight']\` | 默认 4px |

> 其他类型：[EllipsisProps](/xueyan-react-ellipsis?doc=0002#ellipsisprops)
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
