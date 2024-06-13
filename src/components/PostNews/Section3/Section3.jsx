/* eslint-disable no-unused-vars */
import React from "react";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import HomeMediumItem from "../../../Templates/HomeSectionMedium/HomeMediumItem";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";

const Section3 = () => {
  const data1 = Posts.filter((item) => item.type == "sct3a");
  const data2 = Posts.filter((item) => item.type == "sct3b");

  return (
    <div style={{ margin: "50px 0px" }}>
      <div className="mediumSection">
        <HomeMediumItem />
        {/* {data1.map((item, index) => {
            return (
              <div key={index}>
                <HomeMediumItem
                  link={item.link}
                  img={item.img}
                  alt={item.alt}
                  title={item.title}
                />
              </div>
            );
          })} */}
      </div>

      <div>
        <div className="medium2Section">
          {data2.map((item, index) => {
            return (
              <div key={index}>
                <HomeMedium2
                  link={item.link}
                  img={item.img}
                  alt={item.alt}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3;
