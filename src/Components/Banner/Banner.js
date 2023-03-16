import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Tech">Tech</option>
              <option value="Medicine">Medicine</option>
              <option value="Food">Food</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Kids">Kids</option>
              <option value="Fashion">Fashion</option>
              <option value="Craft">Craft</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Tech")} >Tech</span>
            <span onClick={()=>setCategory("Medicine")} >Medicine</span>
            <span onClick={()=>setCategory("Food")} >Food</span>
            <span onClick={()=>setCategory("Cosmetics")} >Cosmetics</span>
            <span onClick={()=>setCategory("Kids")} >Kids</span>
            <span onClick={()=>setCategory("Fashion")} >Fashion</span>
            <span onClick={()=>setCategory("Craft")} >Craft</span>
          </div>
        </div>
        <div className="banner">
          <img width="1362pzx" height="250px" src="../../../Images/Banner2.jpeg" alt=""  />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
