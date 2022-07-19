import {makeSupportHandler} from './factories/makeSupportHandler'

const body = {
    category: 'invalidCategory',
    productName: 'TV'
}

const supportHandler = makeSupportHandler()

supportHandler.handle({body}).then(console.log).catch(console.error)