import { Button} from 'antd';
import Header from './components/header/Header.jsx';
import Categories from './components/categories/Categories.jsx';
function App() {
  return (
    <>
      <Header />

      <div className="home px-6 flex justify-between gap-10">

        <div className="categories flex-1 overflow-auto h-[80vh] pb-50">
          <div>
            <Categories />
          </div>
        </div>

        <div className="products flex-[8]">
          <div>
            products
          </div>
        </div> 

        <div className="">
          <div>
            cart totals
          </div>
        </div>
      </div>
    </ >
  );
}

export default App;
