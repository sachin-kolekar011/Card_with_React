
// import Activity from './Activity'



// function Profile({size})
// {
//     return (
      
//       <img
//       src="https://i.pinimg.com/736x/fd/60/ca/fd60cadf58a568b89850f1bbba6522c7.jpg"
//       width={300}
//       height={size}
//       alt={"Krishna"}
//       />
//     )
// }

// function Info({Name , Marks, qualities=[]})
// {
//   return (
//     <div className="box">
//     <h2> Name = {Name}</h2>
//     <h3> Marks = {Marks} </h3>
//     <p> Qualities = {qualities.map(el => <li>{el}</li>)}</p>
//     </div>
//   )
// }
// function App() {
//   return (
//     <div>
//       {/* <Info Name="Sachin" Marks={76}/>

//       <Info Name="Prakash" Marks={80}/>

//       <Info Name="Vikram" Marks={84}/>

//       <Info Name="Shubham" qualities={["Brave", "Sharper Mind"]} /> */}

//       {/* <Activity name="Sachin" color="blue"/>
//       <Activity name="Abhay" color="pink"/> */}



      
//     </div>
//   )
// }


import './App.css'
import ProductTab from './ProductTab.jsx'
const App = () =>
{
  const products = [
    { id: 1, name: 'Mouse', price: 100,img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzDGzT7nkSl5M3zElFi-pbZ0Qhg2ep0AwfVEzQKU4zBPkt7bhYiAO_LLr6ie62vvEkspvMmy9YsMHxZ43zeYB9RCh74DvKzFxWw877_54NB3ImBMzW08o8pn4', description: 'A nice mouse' },
    { id: 2, name: 'Keyboard', price: 200,img:'https://media.istockphoto.com/id/1313504623/photo/rainbow-keyboard-gaming-keyboard-with-rgb-light-backlit-keyboard-in-a-dark-room-copy-space.jpg?s=612x612&w=0&k=20&c=97HFzOCdY6zRjMp-Hp9LzO6zYCRwH2_YflQsXP5gRV8=', description: 'A mechanical keyboard' },
    {
      "id": 3,
      "name": "Monitor",
      "price": 300,
      "img": "https://images.samsung.com/is/image/samsung/assets/nz/members/article-assets/gaming-monitors/img-kv-2.jpg?$ORIGIN_JPG$",
      "description": "A 24-inch full HD monitor"
    },
    {
      "id": 4,
      "name": "Gaming Chair",
      "price": 150,
      "img": "https://media.istockphoto.com/id/1143095082/photo/computer-chair-professional-series-orthopedic-chair.jpg?s=612x612&w=0&k=20&c=2txAy9MWws77Njz0Cq93KLWMVduK1s8PI2F2_klaCz4=",
      "description": "A comfort gaming chair with adjustable features"
    },
    
    // Add more products as needed
  ];

  return (
    <ProductTab products={products}/> 
  )
}
export default App
