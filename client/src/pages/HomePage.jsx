import Header from "../components/header/Header.jsx";
import Categories from "../components/categories/Categories.jsx";
import Products from "../components/products/Products.jsx";
import CartTotals from "../components/card/CartTotals.jsx";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/categories/get-all"
        );
        const data = await res.json();

        setCategories(
          data.map((item) => ({
            ...item,
            value: item.title,
            label: item.title,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products/get-all"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <Header setSearch={setSearch} />

      {products.length > 0 && categories.length > 0 ? (
        <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
          <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
            <Categories
              categories={categories}
              setCategories={setCategories}
              setFiltered={setFiltered}
              products={products}
            />
          </div>

          <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px]">
            <Products
              categories={categories}
              filtered={filtered}
              products={products}
              setProducts={setProducts}
              search={search}
            />
          </div>

          <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
            <CartTotals />
          </div>
        </div>
      ) : (
        <Spin
          size="large"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </>
  );
};

export default HomePage;