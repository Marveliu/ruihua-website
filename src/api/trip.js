import axios from 'axios'

const instance = axios.create({
  baseURL: 'open/api/trip'
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
  getCount(){
    return Promise.resolve(100)
  },
  getTrips(params) {
    return instance.get('getTrips', {params}).then(({
      data
    }) => data)
  },
  getHotTrips() {
    return instance.get('getHotTrips').then(({
      data
    }) => data)
  },
  getTripDetail() {
    return instance.get('getTripDetail', params).then(({
      data
    }) => data)
  }
}