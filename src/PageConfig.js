/**
 * 这里是给扩展留的入口
 * 连接base和业务主文件
 * 负责注册业务文件实现
 */
import Base from './Base'

class PageConfig extends Base {
  constructor () {
    super()
    this.eventMaps = {
      '#title': ['click', this.handleTitleClick] // 处理事件的命名也要统一
    }
    this.elements = {
      'title': '#title'
    }
    this.js2UIHandlers = {
      'initSwiper': this.initSwiper
    }
  }
}

export default PageConfig
