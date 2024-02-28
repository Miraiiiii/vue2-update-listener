/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-27 18:26:15
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-28 10:51:10
 */

/**
 * modal调用promise化
 * @param {Object} comp Vue组件配置对象
 * @param {Object} defaultConfig 默认配置对象
 * @param {Element} mountedEl 挂载对象
 * @returns {Promise} Promise对象
 */

// import Vue from 'vue'
import Vue from 'vue'

export function modalPromise(comp, defaultConfig, mountedEl) {
  return (config, removable = true) => {
    return new Promise((resolve, reject) => {
      const props = Object.assign({}, defaultConfig, config)
      const Ctor = Vue.extend(comp)
      const vm = new Ctor({
        el: document.createElement('div'),
        propsData: props
      })

      vm.$on('cancel', function (data) {
        this.$destroy()
        const parent = this.$el.parentElement
        parent && parent.removeChild(this.$el)
        reject(data)
      })

      vm.$on('confirm', function (data) {
        if (removable) {
          this.$destroy()
          const parent = this.$el.parentElement
          parent && parent.removeChild(this.$el)
        }
        resolve(data, this)
      })

      if (!mountedEl) {
        mountedEl = document.body
      }

      mountedEl.appendChild(vm.$el)
    })
  }
}
