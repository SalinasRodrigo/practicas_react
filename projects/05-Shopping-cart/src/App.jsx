import {products} from './mooks/producs.json'
import { Products } from './components/Products'

function App() {


  return (
    <Products products={products}/>
  )
}

export default App
