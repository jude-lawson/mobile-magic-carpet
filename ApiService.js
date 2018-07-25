var jwt = require('jwt-simple');
import { handshake, host_url, api_version } from './config'
class ApiService{
  static encodeJwt(payload){
    return jwt.encode(payload, handshake)
  }
  static decodeJwt(payload){
    return jwt.decode(payload, handshake)
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
      api_key: getFromKeychain("api_key"),
      refresh_token: getFromKeychain("refresh_key"),
      id: getFromKeychain("id"),
      extra: extra
    }
  }


  static goGet(url_extension, method, headers=null){
    fetch(`${host_url}/${api_version}/${url_extension}`, {
      method: method,
      headers: {
        payload: encodeJwt(setPayloadHeaders(headers)),
      }
    })
    .then((data)=>{
      return decodeJwt(data.json()["payload"])
    })
    .catch((error)=>console.log(error));
  }


}
