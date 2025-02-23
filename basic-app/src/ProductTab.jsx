import './ProductTab.css';
import Product from './Product';

const ProductTab = ({products}) =>
{
    return (
        
        <>
        <h1 className="headingAlign"> The Complete Gaming SetUp</h1>
        <div className="individualSize">
            
            {products.map(product =>(
            <Product 
                key={product.id}
                productName={product.name}
                img = {product.img}
                description={product.description}
                price={product.price}
            />
            
            
            )
            
            )
}


        </div>

        <h1 className="headingAlign"> Just Learning The React & Applying the learned Concept on Pracitical with Small Theme</h1>

        <h1 className="headingAlign">  ! Thank You ! </h1>
        </>
    )
}


export default ProductTab 