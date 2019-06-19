/**
 * Homework 2 - Controlador del CRUD Menu
 * Aquí se define el método get para obtener el menu de la pizzeria.
 */

// Dependencias de la aplicacion
let _data = require('./../lib/data');
let _helpers = require('./../lib/helpers');

// Controlador dependiendo la solicitud URI
let handlers = {};

/**
 * Manejo de los metodos que seran aceptados en el controlador.
 * @param data
 * @param callback
 */
handlers.items = function (data, callback) {
    let acceptableMethods = ['get'];
    if (acceptableMethods.indexOf(data.method) > -1) {
        handlers._items[data.method](data, callback);
    } else {
        callback(405);
    }
};

handlers._items = {};

/**
 * URI /menu?code={?}
 * @param data
 * @param callback
 */
handlers._items.get = function (data, callback) {
    // Validar los parámetros de la solicitud.
    let token = typeof (data.headers.token) === 'string' ? data.headers.token : false;
    let email = typeof (data.headers.email) === 'string' && data.headers.email.trim().length > 0 ? data.headers.email : false;
    let code = typeof (data.queryStringObject.code) === 'string' && data.queryStringObject.code.trim().length > 0 ? data.queryStringObject.code.trim() : false;

    _helpers.verifyToken(token, email, function (isValid) {
        // Verificar si el token es válido
        if (isValid) {
            _data.read('items', 'menu', function (err, data) {
                if (!err && data) {
                    if (code) {
                        callback(200, data[code]);
                    } else {
                        callback(200, data);
                    }
                } else {
                    callback(400, {'Error': 'No hay menu disponible'});
                }
            });
        } else {
            callback(403, {'Error': 'El token es requerido o ya no es valido.'});
        }
    });
};

module.exports = handlers;
