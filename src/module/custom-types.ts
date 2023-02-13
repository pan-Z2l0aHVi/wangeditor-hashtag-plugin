/**
 * @description hashtag element
 * @author wangfupeng
 */

type EmptyText = {
  text: ''
}
export type HashtagElement = {
  type: 'hashtag'
  value: string
  info: any
  children: EmptyText[] // void 元素必须有一个空 text
}
