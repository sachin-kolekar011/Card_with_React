

import Price from './Price';
import './Product.css' ;
import ProductImg from './ProductImg';
import ProductInfo from './ProductInfo';
import ProductTitle from './ProductTitle';

function Product({productName,img , description , price})
{
    return (
        <div className="productStructure">
            <ProductTitle productName={productName}/>
            <ProductImg img={img} />
            <ProductInfo description={description}/>
            <Price price={price}/>
        </div>
    )
}

export default Product 