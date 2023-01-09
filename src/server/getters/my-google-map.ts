/**
 * @file BFF google map getter
 * @module server.getter.my-google-map
 * @author Surmon <https://github.com/surmon-china>
 */

import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import { VALUABLE_LINKS } from '@/config/app.config'

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@'
})

export const getMyGoogleMap = () => {
  return axios
    .get<any>(VALUABLE_LINKS.GOOGLE_MY_MAP_KML, {
      timeout: 6000
    })
    .then((response) => {
      if (response.status === 200) {
        return parser.parse(response.data).kml.Document
      } else {
        return Promise.reject(response.data)
      }
    })
    .catch((error) => {
      return Promise.reject(error.toJSON?.() || error)
    })
}
