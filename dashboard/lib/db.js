import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient();

export async function getProducts(search, offset) {
  if (search) {
    await prisma.product.where({
      OR: [{ name: { contains: search, mode: 'insensitive' } }]
    });
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  let totalProducts = await prisma.product.count();
  let moreProducts = await prisma.product.findMany({
    skip: offset,
    take: 5
  });
  let newOffset = moreProducts.length >= 5 ? offset + 5 : null;

  return {
    products: moreProducts,
    newOffset,
    totalProducts
  };
}

export async function deleteProductById(id) {
  // await db.delete(products).where(eq(products.id, id));
  await prisma.product.delete({
    where: {
      id: id
    }
  });
  return true;
}
