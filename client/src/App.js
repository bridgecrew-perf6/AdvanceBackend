
import axios from 'axios';
import { SortButton }  from './components/sortButton';
import {useState,useEffect} from 'react';
import ProductComponent  from "../src/components/productComponent";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/data?_limit=8&_page=${page}`).then((res)=>{
      setData(res.data);
    })
    
  }, [page])

  const [filterProd, setFilterProd] = useState({});

  const  handleSort = (parameter, value) => {
    setFilterProd({parameter, value});
  }


  return (
    <div className="App">
     
     <div style={{
          width: "100%",
          height: "100px",
          backgroundColor: "red", lineHeight: "100px",
          display: "flex",
          justifyContent: "space-between",
          
        }}>
         
          <SortButton handleSort={handleSort}/>

          <h3>page number:- {page}</h3>
        </div>


      <div className = "container">
      {data.sort((a,b)=>{

        if(filterProd.parameter === 'brandname' && filterProd.value === 'asc'){
          return a.brandname.localeCompare(b.brandname);
        }
        else if(filterProd.parameter === 'brandname' && filterProd.value === 'desc'){
          return b.brandname.localeCompare(a.brandname);
        }
        else if(filterProd.parameter === "price" && filterProd.value === 'asc'){
          return a.price - b.price;
        }
        else if(filterProd.parameter === "price" && filterProd.value === 'desc'){
          return b.price - a.price;
        }

      }).map((e)=>
      <ProductComponent key={e.id} product={e}/>
      )}
      </div>
    <button  className="float-l"
     onClick={()=>{
      setPage(page+ -1);
      console.log(page)
    }}> PREV </button>
    <button 
    className="float-r"
    onClick={()=>{
      setPage(page+1);
      console.log(page)
    }}> Next </button>
     
    </div>
  );
}

export default App;
