module.exports = {
    theme: {
        // fontFamily:{
        //     'body':['system-ui','BlinkMacSystemFont','-apple-system','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif']
        // },
        // container: {
        //     center: true,
        // },
        extend:{
          height: {
            '2px': '2.4px',
          },
          margin: {
            '2px': '2px'
          },
        },
        colors: {
            primary: "#fecd50",
            white: "#fff",
            black: "#3F3D56",
            gray: {
                light: "#F8FAFA",
                default: "#C4C4C4",
                "600": "#e6e6e6",
                dark: "#858585",
            },
            blue: {
                light: "#F1F1F9",
                default: "#2A457C",
                gray: "#605e78",
                "gray-dark":"#788195",
                dark: "#3F3D56",
                darkest: "#2b303b",
            }
        }
    },
    variants: {},
    corePlugins: {
        container: false
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            '@screen sm': { // (640px)	
              maxWidth: '600px',
            },
            '@screen md': { // (768px)	
              maxWidth: '710px',
            },
            '@screen lg': { // (1024)
              maxWidth: '950px',
            },
            '@screen xl': { // (1280)
              maxWidth: '1150px',
            },
          }
        })
      }
    ],
}
