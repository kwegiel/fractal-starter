'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Library');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.set('builder.dest', __dirname + '/build');

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: 'blue',
    // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);

const twigAdapter = require('@frctl/twig')();
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

fractal.components.set('default.preview', '@preview');