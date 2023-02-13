/**
 * @description render elem test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import renderElemConf from '../../src/module/render-elem'
import { HashtagElement } from '../../src/index'

describe('hashtag render-elem', () => {
  const editor = createEditor()

  const hashtagElem: HashtagElement = {
    type: 'hashtag',
    value: '张三',
    info: { x: 10 },
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(renderElemConf.type).toBe('hashtag')
  })

  it('render elem', () => {
    const vnode = renderElemConf.renderElem(hashtagElem, null, editor)
    expect(vnode.sel).toBe('span')
    expect(vnode.text).toBe('#张三')
    // @ts-ignore
    expect(vnode.data.props.contentEditable).toBe(false)
  })
})
