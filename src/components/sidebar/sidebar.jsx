import React from "react";
import styled from "styled-components";
import  {SidebarData} from "./sidebarData";
import logo from "../../images/Logo 3.png";

export default function Sidebar() {
  return (
    <>
      <Wrapper>
        <img src={logo} alt="Clinovation " className="logo" />
        <div className="Sidebar">
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="SidebarRow"
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  {" "}
                  <div id="icon">{val.icon}</div> <div>{val.title}</div>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  //   background-color: #f8f8f6;
  font-family: "Mulish", sans-serif;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  .Sidebar {
    height: 100%;
    width: 100px;
    background-color: #f8f8f6;
  }
  .SidebarList {
    height: auto;
    padding: 0;
    width: 100%;
  }
  .SidebarList .SidebarRow {
    width: 100%;
    height: 50px;
    // border: 1px solid black;
    list-style-type: none;
    margin: 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  .SidebarRow #icon {
    flex: 30%;
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
  }
  .SidebarList .SidebarRow:hover {
    cursor: pointer;
    background-color: #293846;
    color: white;
  }
  .logo {
    height: 70px;
    width: 90px;
    padding-left: 2px;
  }
`;
