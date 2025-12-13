import Header from './components/header/Header.jsx';
import Categories from './components/categories/Categories.jsx';
import Products from './components/products/Products.jsx';
import CardTotals from './components/card/CardTotals.jsx';
function App() {
  return (
    <>
      <Header />

      <div className="home px-6 flex justify-between gap-10">

        <div className="categories overflow-auto h-[80vh] pb-50">
          <div>
            <Categories />
          </div>
        </div>

        <div className="products flex-[8]">
          <div>
            <Products />
          </div>
        </div> 

        <div className="card-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <div>
            <CardTotals /> 
          </div> 
        </div>
          
      </div>
    </ >
  );
}

export default App;
