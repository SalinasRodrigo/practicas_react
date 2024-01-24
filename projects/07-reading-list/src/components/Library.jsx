/* eslint-disable react/prop-types */

export const Library = ({library}) => {

  return(
    <div className='img-grid'>
        {library.library.map((data)=>{
          return(
            <div key={data.book.ISBN}>
              <img src={data.book.cover} alt={`${data.book.title} cover`} />
            </div>
          )
        })}
      </div>
  )
}