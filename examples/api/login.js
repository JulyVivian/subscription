import {
  OPTIONS_POST,
  parseResponse,
  parseCommonResponse
} from './helper'

fetchVerifyCode(mobile) {
  let url = `//api.6pence.cn/verifyCode`

  return fetch(url, Object.assign(
      {}
      , OPTIONS_POST
      , {
        body: `type=bind&mobile=${mobile}`
      }))
      .then(parseResponse)
      .then(parseCommonResponse)
}
