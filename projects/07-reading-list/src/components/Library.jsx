/* eslint-disable react/prop-types */

export const Library = ({library}) => {
  return(
    <div className="library">
      <h2>{library.library.length} libros disponibles</h2>
      <div className='img-grid'>
        {library.library.map((data)=>{
          return(
            <div key={data.book.ISBN} className="img-container">
              <img src={data.book.cover} alt={`${data.book.title} cover`} />
              <div className="add-button">add</div>
            </div>
          )
        })}
      </div>
      
    </div>
    
  )
}