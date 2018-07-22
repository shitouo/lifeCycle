import $ from 'jQuery'

class lifeCycles {
  constructor () {
    this.body = $('body')
  }

  jsHandleUI () {
    for (let key in this.js2UIHandlers) {
      if (this.js2UIHandlers.hasOwnProperty(key)) {
        this.js2UIHandlers[key]()
      }
    }
  }

  bindElemetns () {
    for (let key in this.elements) {
      if (this.elements.hasOwnProperty(key)) {
        this[key] = $(this.elements[key])
      }
    }
  }

  bindEvents () {
    for (let key in this.eventMaps) {
      if (this.eventMaps.hasOwnProperty(key)) {
        let item = this.eventMaps[key]
        this.body.on(item[0], key, item[1])
      }
    }
  }

  unbindEvents () {}

  start () {
    this.jsHandleUI()
    this.bindEvents()
  }
}

export default lifeCycles