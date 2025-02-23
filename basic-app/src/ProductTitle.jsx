import './ProductTitle.css' ;

function ProductTitle({productName})
{
    return (
        <div className="headingdiv">
            <h3 ><b class="headingColor">{productName}</b></h3>
        </div>
    )
    
    
}

export default ProductTitle 