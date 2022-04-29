import React from 'react'
import { Link } from 'xueyan-react-link'
import { SunIcon } from 'xueyan-react-icon'
import TEST_ICON from './test.jpg'

export default function Main() {
  return (
    <div>
      <div>
        <Link>
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <Link style={{ width: '100px' }}>
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <Link src={TEST_ICON} href="#">
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <Link 
          style={{ width: '100px', height: '30px', background: '#999' }} 
          href="#"
          title="dsdsd"
          icon={<SunIcon size={14} />}
        >
          这是一段测试文本，this is a testing string.
        </Link>
      </div>
      <div>
        <Link src={TEST_ICON} href="#" title="dsdsd"></Link>
      </div>
    </div>
  )
}
