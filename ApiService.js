import JWT from 'expo-jwt'
import { handshake, host_url, api_version } from './config'
import SInfo from 'react-native-sensitive-info'

class ApiService{
  static encodeJwt(payload){
    return JWT.encode(payload, handshake)
  }
  static decodeJwt(payload){
    return JWT.decode(payload, handshake)
  }
 
  static createAdventure(){
    return this.goGet('adventures', 'post')
  }
  static acceptEstimate(adventureInfo){
    return this.goGet('rides', 'post', adventureInfo)
  }

  static createUser(){
    return this.goGet('users', 'post')
  }

  static getFromKeychain(key){
    SInfo.getItem(key, {})
    .then((data)=>{return data})
    .catch((error)=>{console.log(null,error)})
  }

  static setPayloadHeaders(extra){
    return {
      api_key: ApiService.getFromKeychain("api_key"),
      refresh_token: ApiService.getFromKeychain("refresh_key"),
      id: ApiService.getFromKeychain("id"),
      extra: extra
    }
  }


  static goGet(url_extension, method, headers=null){
    fetch(`${host_url}/${api_version}/${url_extension}`, {
      method: method,
      headers: {
        payload: ApiService.encodeJwt(ApiService.setPayloadHeaders(headers)),
      }
    })
    .then((data)=>{
      return ApiService.decodeJwt(data.json()["payload"])
    })
    .catch((error)=>console.log(error));
  }
}
export default ApiService