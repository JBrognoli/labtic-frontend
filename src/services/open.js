import http from './http'

/**
 * module "open" used for requests where the user need no requirements such as authetication
 */

export default {
  /**
   * Como exemplo: nessa função Login, recebe o parametro "user", que pode ser qualquer variável,
   * nesse caso, é um objeto que é passado no data da requisição post.
   * Após feita a requisição, é devolvido a variável ret, que possui o valor retornado da requisição.
   */
  async logIn(user) {
    let ret = await http.post('/api/login', {
      login: user.email,
      password: user.password,
    })
    return ret
  },
}
