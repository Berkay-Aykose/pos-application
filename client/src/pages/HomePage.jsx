import Header from '../components/header/Header.jsx';
import Categories from '../components/categories/Categories.jsx';
import Products from '../components/products/Products.jsx';
import CardTotals from '../components/card/CardTotals.jsx';

const HomePage = () => {
  return (
    <>
      <Header />

      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <div>
            <Categories />
          </div>
        </div>

        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
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
  )
}
 
export default HomePage