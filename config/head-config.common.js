/**
 * Configuration for head elements added during the creation of index.html.
 *
 * All href attributes are added the publicPath (if exists) by default.
 * You can explicitly hint to prefix a publicPath by setting a boolean value to a key that has
 * the same name as the attribute you want to operate on, but prefix with =
 *
 * Example:
 * { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
 * Will prefix the publicPath to content.
 *
 * { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png', '=href': false },
 * Will not prefix the publicPath on href (href attributes are added by default
 *
 */
module.exports = {
  link: [
    /** <link> tags for favicons **/
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon.png' },

    /** css **/
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/loader.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/lib/foundation.min.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/mmi-foundation.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/button.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/switch.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/input.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/lib/font-awesome.min.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/global.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/table.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/form.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/themes/terapy/terapy.block.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/themes/cherry/cherry.block.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/themes/wave/wave.block.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/primeng.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/primeng-theme.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/mmi-primeng.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/lib/toaster.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/modal.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/1.9.32/css/materialdesignicons.min.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/lib/material.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/mmi-material.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/spinner.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/status.css' },

    /** <link> tags for a Web App Manifest **/
    { rel: 'manifest', href: '/assets/manifest.json' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#00bcd4' },
    { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
    { name: 'theme-color', content: '#00bcd4' }
  ]
};
