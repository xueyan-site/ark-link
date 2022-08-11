import React, { useState } from 'react'
import { Article, Segment } from 'ark-markdown'
import { Playground } from 'ark-playground'
import { Link, LabelLink } from 'ark-link'
import { SunIcon } from 'sicon'
import TEST_ICON from './test.jpg'

const MARK1 = `
链接锚点组件库，用于展示链接图片，或链接文字。
`

const code1 = `
import React from 'react'
import { Link } from 'ark-link'

export default function Example() {
  return (
    <Link href="#">
      这是一段测试文本，this is a testing string.
    </Link>
  )
}
`

const code2 = `
import React from 'react'
import { Link } from 'ark-link'
import TEST_ICON from './test.jpg'

export default function Example() {
  return (
    <Link src={TEST_ICON} href="#"></Link>
  )
}
`

const code3 = `
import React from 'react'
import { LabelLink } from 'ark-link'

export default function Example() {
  return (
    <LabelLink 
      href="#"
      title="dsdsd"
      icon={<SunIcon />}
      style={{ 
        width: '100px', 
        height: '30px', 
        background: 'var(--base1)' 
      }} 
    >
      这是一段测试文本，this is a testing string.
    </LabelLink>
  )
}
`

export default function Main() {
  const scope = { React, useState, Link, LabelLink, SunIcon, TEST_ICON }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Segment>## 文本链接</Segment>
      <Playground scope={scope}>
        {code1}
      </Playground>
      <Segment>## 图片链接</Segment>
      <Playground scope={scope}>
        {code2}
      </Playground>
      <Segment>## 标签链接</Segment>
      <Playground scope={scope}>
        {code3}
      </Playground>
    </Article>
  )
}
