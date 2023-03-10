/**
 * @description render elem
 * @author wangfupeng
 */

import { h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'
import { HashtagElement } from './custom-types'

function renderHashtag(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // 当前节点是否选中
  const selected = DomEditor.isNodeSelected(editor, elem)
  const { value = '' } = elem as HashtagElement

  // 构建 vnode
  const vnode = h(
    'span',
    {
      props: {
        contentEditable: false, // 不可编辑
      },
      style: {
        marginLeft: 'var(--w-e-hashtag-ml)',
        marginRight: 'var(--w-e-hashtag-mr)',
        color: 'var(--w-e-hashtag-text-color)',
        backgroundColor: 'var(--w-e-hashtag-bg-color)',
        border: selected // 选中/不选中，样式不一样
          ? 'var(--w-e-hashtag-bd-w) solid var(--w-e-hashtag-selected-border-color)' // wangEditor 提供了 css var https://www.wangeditor.com/v5/theme.html
          : 'var(--w-e-hashtag-bd-w) solid transparent',
        borderRadius: 'var(--w-e-hashtag-radius)',
        padding: '0 var(--w-e-hashtag-pd)',
        boxShadow: selected ? '0 0 0 2px var(--w-e-hashtag-selected-shadow-color)' : '',
      },
    },
    `#${value}` // 如 `#张三`
  )

  return vnode
}

const conf = {
  type: 'hashtag', // 节点 type ，重要！！！
  renderElem: renderHashtag,
}

export default conf
