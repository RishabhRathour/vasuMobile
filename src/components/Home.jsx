import React from 'react'


const Home = () => {
  return (
<>
      <div className="home" id="home">
      <form action="" className='sell-box' id='sell-box'>
        <span>Sell your Phone</span>
<select className='sellDropdown line' name="sellDropdown" id="sellDropdown"  size="1">
    <option value=""selected >Select Brand</option>
  <option value="apple">Apple</option>
  <option value="samsung" >Samsung</option>
  <option value="onePlus">OnePlus</option>
</select>

<select className='sellDropdown' name="sellDropdown" id="sellDropdown"  size="1">
    <option value=""selected >Select Model</option>
  <option value="apple">Apple</option>
  <option value="samsung" >Samsung</option>
  <option value="onePlus">OnePlus</option>
</select>
        
      </form>
      </div>
    </>
  );
}

export default Home