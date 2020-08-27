/**
 * Homework 3 - Controlador del CRUD Session
 */

// Dependencias libs
const helpers = require('../lib/helpers')
// Controlador dependiendo la solicitud URI
const handlers = {}

/**
 * Accounts - post (URI: session/create)
 * @param req
 * @param callback
 */
handlers.create = (req, callback) => {
  if (req.method !== 'get') {
    callback(405, undefined, 'html')
  } else {
    const data = {
      'head.title': 'Login to your account',
      'head.description': 'Favor de ingresar los datos de acceso, para iniciar sesión.',
      'body.title': 'Puerta de entrada al sistema',
      'body.class': 'sessionCreate',
    }

    helpers.getTemplate('sessions/create', data, (err, str) => {
      if (!err && str) {
        helpers.applyLayout(str, data, (errLayout, content) => {
          if (!errLayout && content) {
            callback(200, content, 'html')
          } else {
            callback(500, undefined, 'html')
          }
        })
      } else {
        callback(404, undefined, 'html')
      }
    })
  }
}

/**
 * Accounts - post (URI: session/edit)
 * @param req
 * @param callback
 */
handlers.edit = (req, callback) => {}

/**
 * Accounts - post (URI: session/delete)
 * @param req
 * @param callback
 */
handlers.delete = (req, callback) => {}

module.exports = handlers
