import LayoutDefault from '@/components/og/layouts/LayoutDefault.vue'

import PageWidget from '@/components/og/pages/PageWidget.vue'
import PageHome from "@/components/og/pages/PageHome.vue"

const pages = {
    widget: PageWidget,
    home: PageHome
}

const layouts = {
    default: LayoutDefault
}

export { pages, layouts }