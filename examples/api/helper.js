/**
 * 解析http response
 */
export const parseResponse = response => response.json()

/**
 * 解析一般请求的response
 */
export const parseCommonResponse = json => {
  return {
    success: json.status === 200,
    data: json.data,
    message: json.message
  }
}

export const buildQueryString = (queryObject) => {
  let queryString = ''
  if (queryObject && (typeof queryObject === 'object')) {
    for (let key of Object.keys(queryObject)) {
      if (queryObject[key]) {
        queryString += `&${key}=${queryObject[key]}`
      }
    }
  }
  return queryString
}

const OPTION_CREDENTIAL = {
  credentials: 'include'
}

const OPTION_HEADER_CONTENT_TYPE_JSON = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const OPTION_HEADER_CONTENT_TYPE_FORM = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/x-www-form-urlencoded'
}

export const OPTIONS_GET = Object.assign({}, OPTION_CREDENTIAL)

export const OPTIONS_POST = Object.assign(
  {
    method: 'POST'
  }
  , OPTION_CREDENTIAL
  , {
    headers: OPTION_HEADER_CONTENT_TYPE_JSON
  }
)

export const OPTIONS_PUT = Object.assign(
  {
    method: 'PUT'
  }, OPTION_CREDENTIAL
  , {
    headers: OPTION_HEADER_CONTENT_TYPE_JSON
  }
)
