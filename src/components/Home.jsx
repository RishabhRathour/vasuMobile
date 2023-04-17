import React from 'react'
// import vg from "../assets/2.webp"
import {AiFillTablet,AiOutlineMobile,AiOutlineDesktop,AiOutlineSetting} from "react-icons/ai"
// import {CiMobile3} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Vasu Mobiles</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
      <img src={"https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Graphics" />
        {/* <img src={vg} alt="Graphics" /> */}
        <div>
          <p>
            We are your and one only solution to the tech problems your face
            every day. We are leading tech company whose aim is to increase the
            problem solviong ability in children .
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
          A mobile service shop is a one-stop solution for all your smartphone needs.
           From minor repairs to major replacements,
           they offer a range of services to ensure your device is functioning optimally. 
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h2>Deals in</h2>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiOutlineMobile />
              <p>Mobiles</p>   
            </div>
            <div>
              <AiFillTablet style={{ animationDelay: "0.5s" }} />
              <p>Tablets</p>
            </div>
            <div>
              <AiOutlineDesktop style={{ animationDelay: "0.7s" }} />
              <p>Computer</p>
            </div>
            <div>
              <AiOutlineSetting style={{ animationDelay: "1s" }} />
              <p>Repairs</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home