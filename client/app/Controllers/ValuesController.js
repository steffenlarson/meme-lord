/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
import { ProxyState } from "../AppState.js"
import { valuesService } from "../Services/ValuesService.js"

//Private
function _draw() {
  let values = ProxyState.values
  console.log(values)
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw)
  }

  addValue() {
    valuesService.addValue()
  }
}
