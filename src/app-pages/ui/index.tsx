'use client';

import {
  ProductsWrap,
  ProductItem,
  ProductImage,
  ProductItemText,
  Line,
  ProductItemButton,
} from './styled';

// Products List
const ProductItems = [
  {
    price: '12 023',
    vault: 'Р',
    id: 1,
    // imageUrl: 'path/to/image1.jpg',
  },
  {
    price: '8 500',
    vault: 'Р',
    id: 2,
    // imageUrl: 'path/to/image2.jpg',
  },
  {
    price: '5 750',
    vault: 'Р',
    id: 3,
    // imageUrl: 'path/to/image3.jpg',
  },
  {
    price: '15 000',
    vault: 'Р',
    id: 4,
    // imageUrl: 'path/to/image4.jpg',
  },
];

export const Home = () => {
  return (
    <ProductsWrap>
      {ProductItems.map((item, index) => (
        <ProductItem
          key={item.id}
          initial={{ opacity: 0, translateX: '-6%', translateY: '-6%', scale: 0.9 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1 }}
          transition={{ type: 'tween', ease: 'easeInOut', delay: 0.2, duration: 0.5 * (index + 1) }}
        >
          <ProductImage
          // style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          <ProductItemText>
            <p>
              {item.price} <span>{item.vault}</span>
            </p>
            <Line />
            <ProductItemButton>
              <p>купить</p>
            </ProductItemButton>
          </ProductItemText>
        </ProductItem>
      ))}
    </ProductsWrap>
  );
};
