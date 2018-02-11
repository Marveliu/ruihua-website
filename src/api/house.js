import axios from 'axios'

const instance = axios.create({
  baseURL: 'open/api/house',
  timeout: 5000
})

export default {
  getHouseBanners(){
    return instance.get('getHouseBanners').then(({
      data
    }) => data)  
  },
  getCitys() {
    return instance.get('getCitys').then(({
      data
    }) => data)
  },
  getHousesPage(params) {
    return instance.get('getHousesPage', params).then(({
      data
    }) => data)
  },
  getHouse(params) {
    return instance.get('getHouse', params).then(({
      data
    }) => data)
  },
  getHouses(params) {
    return instance.get('getHouses', params).then(({
      data
    }) => data)
  },
  getHotHouses(params) {
    return instance.get('getHotHouses', params).then(({
      data
    }) => data)
  },
  getHouseInfo(params) {
    return instance.get('getHouseInfo', params).then(({
      data
    }) => data)
  }
}
