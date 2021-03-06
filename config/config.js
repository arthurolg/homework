/**
 * Configuración de la aplicación
 */

// Variable para configurar los entornos de la aplicación
const environments = {}

/**
 * Staging (default) - Entorno de desarrollo
 * @type {{tokenDuration: number, tokenSize: number, hashingSecret: string, httpPort: number, envName: string, httpsPort: number}}
 */
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: 'staging',
  hashingSecret: '08c1c0dae1dab39f5db54f286b5a75ae',
  tokenSize: 36,
  tokenDuration: 3600000,
  maxChecks: 5,
  templateGlobals: {
    appName: 'UptimeChecker',
    companyName: 'NotRealCompany',
    copyMessage: 'Todos los derechos reservados',
    year: '2020',
    baseUrl: 'http://localhost:3000/',
  },
}

/**
 * Production - Entorno de producción
 * @type {{tokenDuration: number, tokenSize: number, hashingSecret: string, httpPort: number, envName: string, httpsPort: number}}
 */
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: 'production',
  hashingSecret: 'ad97c097cb5e3fe5baeeffcd67b6cedc',
  tokenSize: 36,
  tokenDuration: 3600000,
  maxChecks: 5,
  templateGlobals: {
    appName: 'UptimeChecker',
    companyName: 'NotRealCompany',
    copyMessage: 'Todos los derechos reservados',
    year: '2020',
    baseUrl: 'http://localhost:5000/',
  },
}

const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV.toLowerCase() : ''

const environmentToExport = typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.staging

module.exports = environmentToExport
