import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
基础链接组件，可渲染图片和文本。

\`\`\`
type Link = React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<LinkRef>
>
\`\`\`


## LinkRef

\`\`\`
interface LinkRef {
  /** 根节点 */
  rootNode: HTMLAnchorElement | null
}
\`\`\`

## LinkProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| disabled | 禁用链接 | \`? boolean\` |  |
| children | 文本内容 | \`? React.ReactNode\` |  |
| src | 图片src | \`? string\` |  |
| title | 标题 | \`? string\` |  |
| target | 超链接跳转方式 | \`? React.HTMLAttributeAnchorTarget\` | 默认 _blank（新开页） |
| href | 超链接地址 | \`? string\` |  |
| onClick | 点击时触发 | \`? React.MouseEventHandler<HTMLElement>\` | 若有 href，则不生效 |
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
