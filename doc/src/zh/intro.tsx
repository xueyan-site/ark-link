import React from 'react'
import { Link, LabelLink } from 'xueyan-react-link'
import { SunIcon } from 'xueyan-react-icon'
import TEST_ICON from './test.jpg'

export default function Main() {
  return (
    <div style={{ background: 'var(--base)' }}>
      <div>
        <Link>
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <Link style={{ width: '100px' }} disabled={true}>
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <Link src={TEST_ICON} href="#">
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <LabelLink 
          style={{ width: '100px', height: '30px', color: 'var(--orange)' }} 
          icon={<SunIcon size={14} />}
        >
          这是一段测试文本，this is a testing string.
        </LabelLink>
      </div>
      <div>
        <LabelLink 
          style={{ width: '100px', height: '30px', background: 'var(--base1)' }} 
          href="#"
          title="dsdsd"
          icon={<SunIcon size={14} />}
        >
          这是一段测试文本，this is a testing string.
        </LabelLink>
      </div>
      <div>
        <Link src={TEST_ICON} href="#" title="dsdsd"></Link>
      </div>
    </div>
  )
}
