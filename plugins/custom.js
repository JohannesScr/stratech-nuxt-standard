import Vue from 'vue'

// Currency filter
Vue.filter('toCurrency', function(value) {
  if (typeof value !== 'number') {
    return value
  }
  // en-ZA USD
  // en-ZA EUR
  var formatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0
  })
  return formatter.format(value)
})

// Date formatter
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
})

// Capitalize String
Vue.filter('capitalizeString', function(string) {
  if (string) {
    string = string.replace(/_/g, ' ')
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
})
