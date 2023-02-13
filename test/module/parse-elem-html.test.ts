/**
 * @description parse elem html test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { HashtagElement } from '../../src/index'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('span[data-w-e-type="hashtag"]')
  })

  it('parse html', () => {
    // elem-to-html 产出格式 `<span data-w-e-type="hashtag" data-w-e-is-void data-w-e-is-inline data-value="张三" data-info="xxx">#张三</span>`
    const value = '张三'
    const info = { x: 10 }
    const infoStr = encodeURIComponent(JSON.stringify(info))
    const elem = document.createElement('span')
    elem.setAttribute('data-w-e-type', 'hashtag')
    elem.setAttribute('data-value', value)
    elem.setAttribute('data-info', infoStr)
    elem.innerHTML = `#{value}`

    const hashtag = parseHtmlConf.parseElemHtml(elem, [], editor) as HashtagElement
    expect(hashtag.type).toBe('hashtag')
    expect(hashtag.value).toBe(value)
    expect(hashtag.info).toEqual(info)
  })
})
