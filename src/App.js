
import './App.css';
import Data from './Data.json'
import {useState} from 'react'

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  

 
  const submit=(e)=>{
    e.preventDefault()
    const newFilter = Data.filter((value) => {
      return value.title.toLowerCase().includes(wordEntered.toLowerCase());
    });
    setFilteredData(newFilter)
  }
  
  return (
    <div className="App">
   
      <div className='header-part'>
          <h1>Books Gallery</h1>
        <form>
          <input type="text" style={{margin:'10px'}} value={wordEntered} onChange={(e) =>{
            setWordEntered(e.target.value)}} />
          <button type="submit" onClick={submit}> search</button>
        </form>
      </div>
      <div>
      <div>
           <div className='flexContainer'>
            <div className='heads'>
            <h3>Book Name</h3>
            </div>
            <div className='heads'>
            <h3>Author</h3>
            </div>
           </div>
         {
            filteredData.map((value) => {
  
          return (
                <div className='flexContainer'>
                
                <div className='heads'>
                <a className='layer' href='https://www.w3schools.com'>{value.title} </a>
                </div>
                <div className='heads'>
                <p>{value.author}</p>
                </div>
              </div>
                  );
          })}
        

      </div>
      </div>


    </div>
  );
}
export default App;
