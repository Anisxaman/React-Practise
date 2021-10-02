import logo from './logo.svg';
import './App.css';




function App() {
  const mysum=999;

  const style={
    backgroundColor:'red',
    color:' White'
  }

  const nayok=['Rubel','Bappa','Emon','pori'];

  const cinema=[
    {nayok:'koober',nayiko:'kopila'},
    {nayok:'rubel',nayiko:'Mousumi'},
    {nayok:'Razzak',nayiko:'Shabana'},

  ]






  return (
  // ----------------------Differrnt way--------------------------------------- */}

    <div className="App">
  {/* ---------------app r bitor ja likha hoi ta e dekai ---------------------*/}

  
      {/* <p style={style}>style</p>
      <Person style={style}></Person>

      <Person ></Person>


      <People name='Rubel' nayeka='mousumi'></People>
      <People name='bapparza' nayeka='mousumi'></People>

      <Address name='Anis' phone='018'></Address>
      <Address name='rekiya' phone='072'></Address>
      <Address name='seuly' phone='3344'></Address> */}

{/* ------------------------------------------------------------- */}
      {/* <Address name={nayok[0]}></Address>
      <Address name={nayok[1]}></Address>
      <Address name={nayok[2]}></Address> */}
{/* ------------------------------------------------------------- */} 

      <ul>
        {
          cinema.map(nunu=><Address name={nunu.nayok} nayeka={nunu.nayiko}></Address>
            )
        }
      </ul>
      {/* <Address></Address> */}




    </div>

    
  );
}











function Person(props){
  console.log(props)
  return (
    <h1 >Sakib Al hasan</h1>
  )
}




function People(props){
  console.log(props)
  const fun={
  color:'white',
  backgroundColor:' brown',
  border:'5px solid black',
 
  }




  return (
    <div style={fun} >
      <h1>My Name {props.name}</h1>
      <p>Anishuzzaman {props.nayeka}</p>
    </div>
  )
}


function Address(props){
  console.log(props);
  return(
   <div className='my'>
    <h1>Name: {props.name}</h1>
    Nayeka: {props.nayeka}
   </div>

  )
}
























export default App;
