// App.js //


import React from "react";
import axios from 'axios';
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CarouselImg from "./component/CarouselImg";
import Resort from "./component/Resort";
import Explore from "./component/Explore";
import Tennis from "./component/Tennis";
import ChildCare from "./component/ChildCare";
import Passion from "./component/Passion";
import MemberShip from "./component/MemberShip";
import AboutClub from "./component/AboutClub";
function App() {
  const images = [
    "https://active-living.ucalgary.ca/sites/default/files/styles/ucws_image_desktop/public/2019-10/FitnessCentre_011A0104_F%20web%20a.jpg?h=1abb87fb&itok=bB078foJ",
    "https://www.clubfitnessny.com/templates/yootheme/cache/56/slider-2-56736da9.webp",
    "https://www.winnipegwinterclub.com/wp-content/uploads/2023/10/DSC00224-scaled.jpg",
    "https://www.inshapeme.com/wp-content/uploads/2022/12/about-in-shape-personal-training-gym.jpg",
    "https://crewcmsblob.imgix.net/5fc4256af28c0a9a71aad372/istock-1457500913.jpg?w=1440",
    "https://lh3.googleusercontent.com/proxy/H45RAYPG4r8-5t2UmtHCCFPHIXYnBWZB0JhxE0Ooew1Spf2hjQQdhgQq3wrGTBWzXNbvvNnxh4QSBLk1XmO8rvaaOdD9N7mrLqOXfCBa7ZDzpp1R1ep827wCe9VBVABHThrNWKsG09zYqUgP6OgYLrTWTleoWS-ZQYA8hnigcP3bG7-N",
    "https://www.omnihotels.com/-/media/images/hotels/sanrst/hotel/sanrst-athletic-club.jpg?h=660&iar=0&w=1170",
    "https://static1.squarespace.com/static/6217fb5fff22994161c2d9c8/t/62862da63780637d1e717ccb/1652960678836/TennisBackground.jpg?format=1500w",
    "https://www.eastbankclub.com/sites/default/files/styles/slyder_image/public/group_yoga.jpg?h=4027ec22&itok=9izVdCl0",
    "https://images.squarespace-cdn.com/content/v1/540e6df4e4b037d78af474c8/1608587544177-3DI0VAPDIFTS7DCYDYH0/Klub+20+Gym+floor+v3-min.jpg",
    // Add more image URLs
  ];

  const resortImages = [
    "https://media.cntraveler.com/photos/53da60a46dec627b149e66f4/master/pass/hilton-moorea-lagoon-resort-spa-moorea-french-poly--110160-1.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/65280e381c5c81f747778687/Suite-exterior-at-Soneva-Jani-/0x0.jpg?crop=1350,899,x123,y0,safe&height=473&width=711&fit=bounds",
    "https://media.cntraveler.com/photos/5e5e9a3617b1dc0008f2fbfe/4:3/w_2664,h_1998,c_limit/EauPalmBeachResort&Spa-PalmBeachFlorida-2020-5.jpg",
    "https://atmosphereresorts.com/wp-content/uploads/2020/03/Main-pool-and-beach-at-Atmosphere-Resorts-Spa.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/648f06a6152abcf5ef5e44a9/e125175d2a6f8fed0c71b983c4d1368d/960x0.jpg?format=jpg&width=960",
  ];

  const fitnessImages = [
    "https://media.istockphoto.com/id/1162483510/photo/doing-squat-exercise-confident-young-personal-trainer-is-showing-slim-athletic-woman-how-to.jpg?s=612x612&w=0&k=20&c=Kk0ZhdUEX9B6ip6wItLFKtuBiTbsZsx0uVmopJMTul4=",
    "https://mybroadband.co.za/news/wp-content/uploads/2020/06/Disabled-Equipment.jpeg",
    "https://womensfitnessclubs.com/wp-content/uploads/2023/11/09160082_1000x800.jpg",
    "https://vancouver.ca/images/cov/feature/fitness-landing-facebook-image.jpg",
    "https://assets-global.website-files.com/64ed0fce572055a37e106d0b/64fe82706abe46916d789564__RYN1300%20Large.jpeg",
  ];
  return (
    <>
      <Header />
      <CarouselImg images={images} />
      <br />
      <div className="container">
        <AboutClub />
        <Resort resortImages={resortImages} />
        <Explore fitnessImages={fitnessImages} />
        <Tennis />
        <ChildCare />
        <Passion />
        <hr style={{ backgroundColor: "black" }} />
        <MemberShip />
        <Footer />
      </div>
    </>
  );
}

export default App;
