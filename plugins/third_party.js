import Vue from 'vue'

// agGrid
import '~/node_modules/ag-grid/dist/styles/ag-grid.css'
import '~/node_modules/ag-grid/dist/styles/ag-theme-material.css'
import 'ag-grid-enterprise/main'
import { LicenseManager } from 'ag-grid-enterprise/main'
LicenseManager.setLicenseKey(
  'Stratech_SA_(Pty)_Ltd_MultiApp_1Devs19_June_2019__MTU2MDg5ODgwMDAwMA==5440291e4cf377d6228543fd5db11745'
)

// UIKit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)

// eCharts
import IEcharts from 'vue-echarts-v3/src/full.js'
// register component to use
Vue.component('chart', IEcharts)

// Vue Modal
import VModal from 'vue-js-modal'
Vue.use(VModal)

// Vee Validate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, {
  inject: true
})
