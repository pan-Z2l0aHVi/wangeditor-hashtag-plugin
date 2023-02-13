/**
 * @description parse elem html
 * @author wangfupeng
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { HashtagElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  // elem HTML 结构 <span data-w-e-type="hashtag" data-w-e-is-void data-w-e-is-inline data-value="张三" data-info="xxx">#张三</span>

  const value = elem.getAttribute('data-value') || ''
  const rawInfo = decodeURIComponent(elem.getAttribute('data-info') || '')
  let info: any
  try {
    info = JSON.parse(rawInfo)
  } catch (ex) {
    info = rawInfo
  }

  return {
    type: 'hashtag',
    value,
    info,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as HashtagElement
}

const parseHtmlConf = {
  selector: 'span[data-w-e-type="hashtag"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
