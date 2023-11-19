import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#97A90D', //#97A90D
                    secondary: '#F0BB00',
                }
            },
        },
    },
})