import { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [btnText, setBtnText] = useState([]);

  for (let i = 1; i <= 8; i++) {
    let obj = { id: i, txt: "Add to Cart" };
    btnText.push(obj);
  }

  let cardDetails = [
    {
      id: 1,
      TopSale: true,
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSmzgxAFmGNNhkBN55pfaam7aDNFCl7uG_A&s",
      productName: "Realme GT 7 Pro 5G",
      description:
        "India's First Snapdragon 8 Elite Smartphone, All New Mars Design",
      starRating: 5,
      mrp: 1000,
      offer: 20,
      btnTxt: btnText[0].txt,
    },
    {
      id: 2,
      TopSale: false,
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ffXEs6jjOWbf20gi_MLYdt1g0GvB7CW_7-jYJ2qS6oM7VfJVT3pBpAWGYqRtSlQ6ioY&usqp=CAU",
      productName: "Realme GT 6 5G",
      description: "Segment first Snapdragon 8s Gen 3, Upto 16GB + 512GB",
      starRating: 5,
      mrp: 800,
      offer: 25,
      btnTxt: btnText[1].txt,
    },
    {
      id: 3,
      TopSale: true,
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArvmxOpXB0kyAy_KmYgTG4n5Wfv0XjNu-PQ&s",
      productName: "Realme GT 6T 5G",
      description: "6000 nits Hyper Display, 120W Charger, Upto 16GB + 512GB",
      starRating: 4,
      mrp: 660,
      offer: 15,
      btnTxt: btnText[2].txt,
    },
    {
      id: 4,
      TopSale: false,
      cardImg:
        "https://www.pc-tablet.co.in/wp-content/uploads/2024/09/3e17b21c468b6ed103680ab5b4ad4c8ff552dfc6-401x403.jpg",
      productName: "Realme P2 Pro 5G",
      description: "Fastest Curved Display Phone, Upto 12GB Dynamic RAM",
      starRating: 4,
      mrp: 499,
      offer: 15,
      btnTxt: btnText[3].txt,
    },
    {
      id: 5,
      TopSale: true,
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyxQhJZU4VdUi1a855QqUKsoCByW-ssuNA1bopetFoDmxAGMpIEF3_ws5ecDeiEtDS4g&usqp=CAU",
      productName: "Realme P1 Speed 5G",
      description:
        "Dimensity 6300 5G Chipset, Get realme Buds Air 5 At Just $30",
      starRating: 3,
      mrp: 250,
      offer: 25,
      btnTxt: btnText[4].txt,
    },
    {
      id: 6,
      TopSale: true,
      cardImg:
        "https://www.jiomart.com/images/product/original/494422778/realme-13-plus-5g-128-gb-8-gb-ram-dark-purple-mobile-phone-digital-o494422778-p610004052-0-202409201233.jpeg?im=Resize=(420,420)",
      productName: "Realme 13+ 5G",
      description: "Dimensity 7300 Energy Chipset, 6050mm² Stainless Steel VC",
      starRating: 3,
      mrp: 250,
      offer: 20,
      btnTxt: btnText[5].txt,
    },
    {
      id: 7,
      TopSale: true,
      cardImg:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQncjFAarwuLejj8OWiEmdrfuYDl09rybm5fJoFaoqYOtAzI6AQZVDOBEThCZYfkfP5SrDzoAmWLtbqzzqHcHMsF17ZHp8mSehTyLMCtn5kKuBFShz3KYEX",
      productName: "Realme 13 Pro",
      description: "5200mAh Battery, 45W SUPERVOOC Charge, Sony LYT-600 OIS",
      starRating: 4,
      mrp: 350,
      offer: 20,
      btnTxt: btnText[6].txt,
    },
    {
      id: 8,
      TopSale: false,
      cardImg:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYPN2LGXhUqCC8wkMwtKUE6Evn1j6gfcJ8qn8nbg3Bh2Be1JxBNBpiJQfE-PzXP1AJgJJhPBvbUtYU60NT_Kayni1KP4LvgAnWf_LSznkqPtLjape9i19EOA",
      productName: "Realme 13 Pro+",
      description:
        "5200mAh Battery, 80W SUPERVOOC Charge, Sony LYT-600 Periscope",
      starRating: 5,
      mrp: 450,
      offer: 25,
      btnTxt: btnText[7].txt,
    },
  ];

  let press = (product) => {
    let foundButton = btnText.find((ele) => product.id === ele.id);

    if (foundButton.txt === "Add to Cart") {
      setCartData([...cartData, product]);

      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Remove from Cart" };
          } else {
            return btn;
          }
        });
      });
    } else if (foundButton.txt === "Remove from Cart") {
      setCartData(cartData.filter((ele) => ele.id != product.id));
      setBtnText((prevBtnText) => {
        return prevBtnText.map((btn) => {
          if (btn.id === product.id) {
            return { ...btn, txt: "Add to Cart" };
          } else {
            return btn;
          }
        });
      });
    }
  };
  return (
    <div>
      <Navbar navDetails={cartData} />
      <Header />
      <section className="content-section py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardDetails.map((card, index) => {
              return <Card key={index++} props={card} press={press} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
