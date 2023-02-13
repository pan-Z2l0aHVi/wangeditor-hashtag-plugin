/**
 * @description elem to html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { HashtagElement } from '../../src/index'

describe('hashtag elem-to-html', () => {
  const value = '张三'
  const info = { x: 10 }
  const hashtagElem: HashtagElement = {
    type: 'hashtag',
    value,
    info,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('hashtag')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(hashtagElem, '')
    const infoStr = encodeURIComponent(JSON.stringify(info))
    expect(html).toBe(
      `<span data-w-e-type="hashtag" data-w-e-is-void data-w-e-is-inline data-value="${value}" data-info="${infoStr}">#${value}</span>`
    )
  })
})
