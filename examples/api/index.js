import { __FFAN_API_GATEWAY__ } from '../../app.config'
import {
  parseResponse,
  parseListQueryResponse
} from './helper'

export default {
  searchCities(keyword) {
    const url = `${__FFAN_API_GATEWAY__}/brand/v1/city?keyword=${keyword}`

    return fetch(url)
      .then(parseResponse)
      .then(parseListQueryResponse)
  }
}
