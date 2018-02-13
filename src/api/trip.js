import axios from 'axios'

const instance = axios.create({
  baseURL: 'open/api/trip',
  timeout: 5000
})

export default {
  getTripBannerImg() {
    return instance.get('getTripBannerImg').then(({
      data
    }) => data.picurl)
  },
  getTripType() {
    return instance.get('getTripType').then(({
      data
    }) => data)
  },
  getTripCount(triptype) {
    return instance.get('getTripCount', {
      params: {
        triptype
      }
    }).then(({
      data
    }) => data.count)
  },
  getTrips(params) {
    return instance.get('getTrips', {
      params
    }).then(({
      data
    }) => data)
  },
  getHotTrips() {
    return instance.get('getHotTrips').then(({
      data
    }) => data)
  },
  getTripDetail(params) {
    return instance.get('getTripDetail', {
      params
    }).then(({
      data
    }) => data)
  }
}
