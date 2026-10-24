

function Product(props){
    return (
        <>

            <div class='product'>
                <div style={{display:"flex", justifyContent:"center", padding:"15px"}}>
                    <img class='image' src={props.image}/>
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <h3 >${props.price}</h3>
                </div>
                <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
                    <button> + Add to Cart</button>
                </div>
            </div>

            
        
        </>
    )
}

export default Product