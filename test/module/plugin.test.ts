/**
 * @description plugin test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import withHashtag from '../../src/module/plugin'
import { HashtagElement } from '../../src/index'

describe('hashtag plugin', () => {
  const showModal = jest.fn()
  const hideModal = jest.fn()
  const editor = withHashtag(
    createEditor({
      config: {
        EXTEND_CONF: {
          hashtagConfig: {
            showModal,
            hideModal,
          },
        },
      },
    })
  )

  const hashtagElem: HashtagElement = {
    type: 'hashtag',
    value: '张三',
    info: { x: 10 },
    children: [{ text: '' }],
  }

  // // TODO 显示和隐藏 modal - 执行有 bug ，待修复
  // it('insert #', done => {
  //   editor.insertText('#')
  //   setTimeout(() => {
  //     expect(showModal).toBeCalled() // 显示 modal

  //     setTimeout(() => {
  //       editor.insertText(' ')
  //       setTimeout(() => {
  //         expect(hideModal).toBeCalled() // 隐藏 modal
  //         done()
  //       })
  //     })
  //   })
  // })

  it('isInline', () => {
    expect(editor.isInline(hashtagElem)).toBe(true)
  })

  it('isVoid', () => {
    expect(editor.isVoid(hashtagElem)).toBe(true)
  })
})
