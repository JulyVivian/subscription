/**
 * Created by sunyiling on 16/11/14.
 */

import 'whatwg-fetch'

let Fetch = (url, options) => {
  options = options || {}
  options.method = (options.method || 'GET').toUpperCase()
  options.headers = options.headers || {}

  if (options.method === 'POST') {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (options.body) {
      options.body = options.body
    }
  }
  return new Promise(function(resolve, reject) {
    fetch(url, options)
      .then(function(response) {
        if (response.ok) {
          return response.json()
        } else {
          reject(response.statusText)
        }
      }).then(function(json) {
      if (!json) return
      if (json.status >= 200 && json.status < 400) {
        resolve(json)
      } else {
        reject(json)
      }
    }).catch(function(ex) {
      throw (ex)
    })
  })
}
export default Fetch
