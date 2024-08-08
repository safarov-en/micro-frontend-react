import {render} from 'solid-js/web'
import 'tailwindcss/tailwind.css'

import AddToCart from './AddToCart'

export default function placeAddToCart(el, id) {
    render(() => <AddToCart id={id} />, el);
}