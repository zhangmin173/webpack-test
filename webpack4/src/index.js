import { greet, say } from './a'
import sex from './b'

greet('zhangmin')
say(18)
sex('boy')

if (window.location) {
  import('./c').then(a => {
    a()
  })
}