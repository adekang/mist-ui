import {makeInstaller} from '@mist-ui/utils'
import components from './components'
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas} from "@fortawesome/free-solid-svg-icons"

import '@mist-ui/theme'

library.add(fas)
const installer = makeInstaller(components)
export * from '@mist-ui/components'
export default installer