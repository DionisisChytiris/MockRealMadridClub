/* eslint-disable no-unused-vars */
import React,{useRef} from 'react'
import FirstTeamItem from "../../Templates/FirstTeamItem/FirstTeamItem";
import FTMenFC from "../../../data/FirstTeam/FTMenFC";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import '../FirstTeamFCMen/StylesFT.css'

const Squad = () => {
  const data1 = FTMenFC.filter((item) => item.position == "Goalkeeper");
  const data2 = FTMenFC.filter((item) => item.position == "Defender");
  const data3 = FTMenFC.filter((item) => item.position == "Midfielder");
  const data4 = FTMenFC.filter((item) => item.position == "Forward");

  const teamRef1 = useRef(null);
  const teamRef2 = useRef();

  const handleRight1 = (event) => {
    event.preventDefault();
    if (teamRef1.current) {
      teamRef1.current.scrollBy({
        left: -300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };
  const handleleft1 = (event) => {
    event.preventDefault();
    if (teamRef1.current) {
      teamRef1.current.scrollBy({
        left: 300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="ft-fc-men-cnt">
      {/* Goalkeeper */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Goalkeeper</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data1.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Defender */}

      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Defender</div>
        <div style={{position: 'relative'}}>
          <div style={btnbx}>
            <div onClick={handleRight1} style={btnItm}>
              <RiArrowLeftSLine size={24} />
            </div>
            <div onClick={handleleft1} style={btnItm}>
              <RiArrowRightSLine size={24} />
            </div>
          </div>
          <div className="ft-fc-ct-imgs" ref={teamRef1}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {data2.map((item, index) => {
                return (
                  <div key={index}>
                    <FirstTeamItem
                      img={item.img}
                      number={item.number}
                      name={item.name}
                      position={item.position}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Midfielder */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Midfielder</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data3.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Forward */}
      <div className="ft-fc-sct1">
        <div className="ft-fc-title">Forward</div>
        <div className="ft-fc-ct-imgs">
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data4.map((item, index) => {
              return (
                <div key={index}>
                  <FirstTeamItem
                    img={item.img}
                    number={item.number}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Squad


const btnbx = {
  position: "absolute",
  top: 180,
  left: 0,
  right: 0,
  zIndex: 999,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0px 30px",
};

const btnItm = {
  backgroundColor: '#e1eaf9',
  padding: "16px 18px",
  borderRadius: 10,
};

const gradientBx = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40%",
  background: "linear-gradient(to top, blue, rgba(0,0,0,0.01))",
};

const numName = {
  position: "absolute",
  bottom: 20,
  left: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
