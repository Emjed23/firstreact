import './App.css';
import ProductDesc from './components/ProductDesc';
import ProductName from './components/ProductName';
import ProductPrice from './components/ProductPrice';
import Productimage from './components/Productimage';

function App(){
  return(
    <div>
      <a>components list:</a>
      <Productimage/>
      <ProductName/>
      <ProductPrice/>
      <ProductDesc/>
    </div>
  )
}
export default App;