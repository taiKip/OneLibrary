import Cart, { CartDocument } from '../models/Cart'
import { NotFoundError } from '../helpers/apiError'

const create = async (Cart: CartDocument): Promise<CartDocument> => {
  return Cart.save()
}
const update = async (
  cartId: string,
  update: Partial<CartDocument>
): Promise<CartDocument | null> => {
  const foundCart = await Cart.findByIdAndUpdate(cartId, update, {
    new: true,
  })

  if (!foundCart) {
    throw new NotFoundError(`Cart not found`)
  }

  return foundCart
}

 export default {create,update}