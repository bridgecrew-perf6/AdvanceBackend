

export const SortButton = ({handleSort}) => {
    return (
        <div className="sort-button">


        <button onClick={() => handleSort('brandname', 'asc')}>Sort by name</button>
        <button onClick={() => handleSort('brandname', 'desc')}>Sort by name desc</button>
        <button onClick={() => handleSort('price', 'asc')}>Sort by price</button>
        <button onClick={() => handleSort('price', 'desc')}>Sort by price desc</button>


</div>

    )
    
      
    


}

