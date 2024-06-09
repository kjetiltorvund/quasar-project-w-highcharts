import { boot } from 'quasar/wrappers'
import HighchartsVue from 'highcharts-vue'


export default boot(async ({ app }) => {
    await app.use(HighchartsVue)
})