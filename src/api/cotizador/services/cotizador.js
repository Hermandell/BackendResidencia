'use strict';

/**
 * cotizador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cotizador.cotizador');
