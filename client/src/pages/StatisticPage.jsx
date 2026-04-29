import Header from "../components/header/Header.jsx";
import StatisticCard from "../components/statistics/StatisticCard.jsx";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="statistic-cards grid grid-cols-4 my-10 gap-10">
            <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={"images/user.png"} />
            <StatisticCard title={"Toplam Kazanç"} amount={"6"} img={"images/money.png"} />
            <StatisticCard title={"ToplamToplam Satış"} amount={"50"} img={"images/sale.png"} />
            <StatisticCard title={"Ortalama Ürün"} amount={"20"} img={"images/product.png"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
