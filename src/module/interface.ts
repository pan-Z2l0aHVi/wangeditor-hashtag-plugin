/**
 * @description interface
 * @author wangfupeng
 */

import { IDomEditor } from '@wangeditor/editor'

export interface IExtendConfig {
  hashtagConfig: {
    showModal: (editor: IDomEditor) => void
    hideModal: (editor: IDomEditor) => void
  }
}
