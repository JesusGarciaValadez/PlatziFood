const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ["./**/*.html"],
            // './**/*.js',
            // './**/*.vue'
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
        require("cssnano")({
            preset: "default",
        }),
    ]
}
