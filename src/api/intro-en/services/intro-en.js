'use strict';

/**
 * intro-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intro-en.intro-en');
