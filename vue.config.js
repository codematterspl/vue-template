const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/styles/breakpoints.scss";
                    @import "@/assets/styles/variables.scss";
                    @import "@/assets/styles/defaults.scss";
                `,
            },
        },
    },

    lintOnSave: 'error',
};
