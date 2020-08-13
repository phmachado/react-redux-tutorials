import { BUY_ICECREAM } from './iceCreamTypes'

// Action creator
export const buyIceCream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}
