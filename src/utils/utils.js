import localforage from 'localforage'

export class Utils {
  /**
   * Busca através do sessionStorage os headears para fazer uma requisição com axios.
   */
  static async getHeaders() {
    let userInfo = await localforage.getItem('userInfo')
    const accessKey = await localforage.getItem('accessKey')
    const authenticationKey = userInfo.authenticationKey
    return {
      'access-key': accessKey || (await sessionStorage.getItem('accessKey')),
      'authentication-key':
        authenticationKey || (await sessionStorage.getItem('authenticationKey')),
    }
  }

  // Todo: make it recursive to search inside objects aswell
  /*  static clearProp(prop) {
    for (let attr in prop) {
      if (prop.hasOwnProperty(attr)) prop[attr] = ''
    }
  } */

  // Accepts both miliseconds or seconds timestamp, converts it to a 'XX/XX/XXXX' Date
  static timeConverter(timestamp) {
    let date = timestamp.toString().length === 13 ? new Date(timestamp) : new Date(timestamp * 1000)
    const day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate()
    const month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    return `${day}/${month}/${date.getFullYear()}`
  }

  /*
 Keep vuex state after refreshing.
  */
}
