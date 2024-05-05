import {makeInstaller} from '@mist-ui/utils'
import components from './components'
import '@mist-ui/theme'


const installer = makeInstaller(components)
export * from '@mist-ui/components'
export default installer