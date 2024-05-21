import { useState, useEffect } from 'react';

import ngo from './img/Ngo.png'
import slide1 from './img/farming.jpg';
import slide2 from './img/class2.jpg';
import slide3 from './img/making.jpg';
// import pc1 from './img/product.jpg';
// import pc2 from './img/teaching.jpg';
// import pc3 from './img/telling.jpg';
// import pc4 from './img/hamper.jpg';
// import pc5 from './img/making.jpg';
// import pc6 from './img/page.jpg';

import photo1 from './img/road.jpg';
import photo2 from './img/teach.jpg';
import photo3 from './img/florist.jpg';
import photo4 from './img/people4.jpg';
import photo5 from './img/page.jpg';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';


const slides = [
  {
    // image: require("../../../Desktop/NGO WEBSITE/src/img/road.jpg"),
    quote:
      "Unleash Your Passion for Cricket and Embrace the Thrill of the Game",
    saleText:
      "Get in the game with up to 50% off on a wide range of cricket gear's",
    productText: "Shop Now",
  },
  {
    // image: require("../../../Desktop/NGO WEBSITE/src/img//teach.jpg"),
    quote:
      "Experience the Unparalleled Excitement and Achieve Victory with Our Premium Cricket Equipment",
    saleText:
      "Limited Time Offer: Don't miss out on the opportunity to upgrade your game",
    productText: "Buy Now",
  },
  {
    // image: require("../../../Desktop/NGO WEBSITE/src/img/florist.jpg"),
    quote:
      "Gear up with the Latest Innovations and Dominate the Field like Never Before",
    saleText: "Discover New Arrivals and stay ahead of the competition",
    productText: "Explore",
  }
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url: photo1

  },
  {
    url: photo2
  },
  //Second image url
  {
    url: photo3
  },
  //Third image url
  {
    url: photo4
  },

  //Fourth image url

  {
    url: photo5
  }
];




const Home = () => {
  const [valuerun, setValuerun] = useState(0);
  const [valuerun1, setValuerun1] = useState(0);
  const [valuerun2, setValuerun2] = useState(0);

  useEffect(() => {
    const timeoutIds = [];

    // Increment valuerun
    timeoutIds.push(setTimeout(() => {
      if (valuerun < 200) {
        setValuerun(valuerun + 1);
      }
    }, 100));

    // Increment valuerun1
    timeoutIds.push(setTimeout(() => {
      if (valuerun1 < 50) {
        setValuerun1(valuerun1 + 1);
      }
    }, 100));

    // Increment valuerun2
    timeoutIds.push(setTimeout(() => {
      if (valuerun2 < 56) {
        setValuerun2(valuerun2 + 1);
      }
    }, 100));

    return () => {
      // Clear all timeouts when component unmounts or re-renders
      timeoutIds.forEach(clearTimeout);
    };
  }, [valuerun, valuerun1, valuerun2]);

  return (
    <>
      <div id='home'>

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slide1} class="d-block w-100 h-70vh" />
            </div>
            <div class="carousel-item">
              <img src={slide2} class="d-block w-100 h-70vh" />
            </div>
            <div class="carousel-item">
              <img src={slide3} class="d-block w-100 h-70vh" />
            </div>
          </div>
        </div>

      </div>
      <div className='home'>
        <div class="typewriter">
         <center>
         <div className='texxt'>
         <h2 className="h2"><span>W</span>elcome To
              <br />Gramin
              Vikas Sanstha </h2>
          </div>
         </center>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='about1'>
        <div className='row '>
          <div className='col'>
            <img src={ngo} className='homepic1' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h1 className='h1'> About Us</h1>
            <h3>Gramin Vikas Sanstha </h3>
            <p>A non-government, non-political, not-for-profit organization, registered under the Public Charitable Trust Act and the Societies Registration Act (1860). <br />
              an NGO, striving towards collective integrated development in Jawhar Tahsil. Gramin Vikas Santha is a non-profit organization registered in 2012. <br />
              Aim is the “Empowerment of SHG group the men and women from rural and tribal society”. </p>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <div className='container-runvalue'>
        <div className='val'>
          <span>Volunters</span>
          <i class='bx bxs-group'></i>
          <h5 id="run">{valuerun}</h5>
        </div>

        <div className="val">
          <span>Programes</span>
          <i class='bx bx-calendar-plus'></i>
          <h5 id="run1">{valuerun1}</h5>
        </div>

        <div className="val">
          <span>Projects</span>
          <i class='bx bx-edit'></i>
          <h5 id="run3">{valuerun2}</h5>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='aims d-flex'>
        <div className='boxaim'>
          <h1>Aim</h1>
          <p>To develop rural areas by setting up various projects. To raise the standard of rural life, create public awareness, find new opportunities for development, and implement them. </p>
        </div>
      </div>



      <br/><br/><br/><br/><br/>
      {/*  */}
      <div className='gallery1'>
        <div className="home4">
          <h1 className="h1">Gallery</h1>
          <br/><br/>
          <div id='forweb'>
            <div className="parent">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
              >
                {sliderImageUrl.map((imageUrl, index) => {
                  return (
                    <div className="slider" key={index}>
                      <img src={imageUrl.url} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div id='forphone'>

        <div className="lg:h-screen ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Virtual]}
            spaceBetween={50}

            navigation

            pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log('slide change')}
            loop={true}
            autoplay={{ delay: 2000, pauseOnMouseEnter: false, disableOnInteraction: true }}
            className=' lg:h-[80%] '


            breakpoints={{
              // when window width is >= 768px (laptop, PC, tablet, iPad)
              768: {
                slidesPerView: 3,
              },
              // when window width is < 768px (mobile device)
              0: {
                slidesPerView: 1,
              },
            }}

          >


            <div className="  w-screen  ">
              {slides.map((project, ind) => (
                <SwiperSlide
                  className="    w-screen   "
                  key={ind}
                >
                  <div className=" imagep">
                    <img
                      className="  w-screen h[60%] imagep  "
                      src={project.image}
                      alt={"hello"}

                    />
                  </div>
                  {/* <a href={project.link} title={project.name}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-amber-950">
                  {project.name}
                </div>
                <p className="text-gray-700 text-base">{project.desc}</p>
              </div>
              </a> */}


                </SwiperSlide>
              ))}
            </div>



          </Swiper>
        </div>
      </div>
      {/*  */}

      <br/><br/>
      <br/><br/>

      <div className='projects'>
        <center>        <h1 className='m-5'>Our Projects</h1></center>
        <h6>Our upcoming project is waiting for CSR Funds </h6>
        <ul>
          <li>Vegetable Growers Union - FPO Company Registration Jawhar and  Mokhada 500 farmers  </li>
          <li>Strawberry Growers Group - Collectively farmers benefit from 300      farmers in Jawhar and Mokhada areas give </li>
          <li>Distribution of machinery and employment creation to       Katkari self helf group – Jawhar and Mokhada 100</li>
          <li>Khadkhad Tourism Travel boat and tourism sports project to generate rural  employment</li>
          <li>Chothachiwadi Tourism paramotoring project to generate rural employment</li>
          <li> Tourism Shirpamal Hot Air Bolon project to generate rural employment</li>
          <li>The part of Tourism, Hanuman Point skywalk and gardening with Planetarium & Elegant fish aquarium to generate rural employment</li>
          <li>Sewing Industry Group - 200 women are registered in the Sewing Machine Group and the sewing project is proposed </li>
        </ul>
        <br />
        <center><a href='/programmes/#projects'><button >View More</button></a></center>
      </div>


      <div className='programmes'>
        <center>  <h1 className='m-5'>Our Programmes</h1></center>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h5>Automatic Cashew Unit Project</h5>
              <br /> – Nandgaon St. Jawhar Dist. Palghar
              <br/>  (Katkari Self Half Group)
            </div>
            <div class="col">
              <h5>Automatic Cashew Unit Project</h5>
              <br /> – Bramhangaon Mokhada District Palghar
            </div>
            <div class="col">
              <h5>Brick Kiln Industry</h5>
              <br /> - Nandgaon Jawhar Dist. Palghar 
              <br/>(Katkari Self Half  Group)
            </div>
          </div>
          <br />
          <center><a href='/programmes'><button>View More</button></a></center>
        </div>
      </div>

      <div>
        <section class="contact" id="contact">
          <div class="container">
            <div class="heading text-center">
              <h2>Contact
                <span> Us </span></h2>
            </div>
            <div className='contactboxes'>
              <div class="row">
                <div class="col m-2">
                  <div class="title">
                    <h3>Contact detail</h3>
                  </div>
                  <div class="content">

                    <div class="info">
                      <h4 class="d-inline-block h4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill m-2" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        PHONE :
                        <br />
                        <span>+91-2520299388 , +91-7775865555</span></h4>
                    </div>

                    <div class="info">
                      <h4 class="d-inline-block h4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill m-2" viewBox="0 0 16 16">
                          <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                          <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                        EMAIL :
                        <br />
                        <span>Graminvikassanshtajawhar@gmail.com</span></h4>
                    </div>
                    <div class="info">
                      <h4 class="d-inline-block h4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill m-2" viewBox="0 0 16 16">
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                        </svg>
                        ADDRESS :<br />
                        <span>
                          Gorwadi Tal & post Jawhar Dist Palghar
                          Maharashtra,<br/> India, Pin. 401603
                          7276099491 /7775895403
                        </span></h4>
                    </div>
                  </div>

                </div>
              </div>
              <div class="col m-2">
                <div className='content'>
                  <br />
                  <div className='info'>
                    <h4 className='h4'> Main Branch: Gramin Vikas Sanstha, jawhar
                      <br />
                      <span> Mrs. Vijaya Mukane,
                        Rajgad, Gorwadi chouk, Gorwadi
                        Tal & post Jawhar Dist Palghar<br/>
                        Maharashtra, India, Pin. 401603.</span>  </h4>
                  </div>
                </div>
                <div className='content'>
                  <br />
                  <div className='info'>
                    <h4 className='h4'> Registered Office:Gramin Vikas Sanstha, jawhar
                      <br />
                      <span > Project Manager
                       <span> Mr. Haresh Gore,
                        Gorwadi Tal & post Jawhar Dist Palghar Maharashtra,</span><br/>
                        India, Pin. 401603 
                        7276099491 / 7775895403
                      </span>  </h4>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      <br/>
      <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30009.353106450002!2d73.1911734223426!3d19.91727610594505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7428974fe32ef%3A0xdc76db7ca5cbdb7a!2sJawhar%2C%20Maharashtra%20401603!5e0!3m2!1sen!2sin!4v1715681326421!5m2!1sen!2sin" width="100%" height="680px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    </>
  )
}
export default Home;
