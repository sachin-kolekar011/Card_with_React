import './Activity.css'

function Activity({name , color})
{
    let style1 = {color: color} ;
    return (
        <>
        <div className ="userWelcome" >
        <h1 style={style1}> Hello {name} </h1>
        </div>
        </>
    )
}



export default Activity ;