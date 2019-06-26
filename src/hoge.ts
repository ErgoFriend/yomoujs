import { IHoge } from './ihoge'
import { name } from './index'

export class Hoge implements IHoge {
  hello() {
    return 'Hello, ' + name
  }
}