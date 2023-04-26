import React, { useEffect, useState } from "react";
import "./DataPreviewer.scss";
import Navbar from "../Navbar/Navbar";
const DataPreviewer = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        await fetch("http://localhost:4444/user/", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data)
            setData(data)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="dataPreviewer">
      {data?.[0] ? <div className="dataTable">
         <header className="headings">
          <div className="headingValue">#</div>
          <div className="headingValue">id</div>
          <div className="headingValue">first_name</div>
          <div className="headingValue">last_name</div>
          <div className="headingValue">email</div>
          <div className="headingValue">gender</div>
          <div className="headingValue">income</div>
          <div className="headingValue">city</div>
          <div className="headingValue">car</div>
          <div className="headingValue">quote</div>
          <div className="headingValue">phone_price</div>
        </header> 
        {data?.map((datavalue,idx) => {
          return (
            <div className="dataValue" key={datavalue.id}>
              <div className="value">{idx+1}</div>
              <div className="value">{datavalue?.id}</div>
              <div className="value">{datavalue?.first_name}</div>
              <div className="value">{datavalue?.last_name}</div>
              <div className="value">{datavalue?.email}</div>
              <div className="value">{datavalue?.gender}</div>
              <div className="value">{datavalue?.income}</div>
              <div className="value">{datavalue?.city}</div>
              <div className="value">{datavalue?.car}</div>
              <div className="value">{datavalue?.quote}</div>
              <div className="value">{datavalue?.phone_price}</div>
            </div>
          );
        })}
      </div>
      : <div className="heading">Please Select a Query</div>
    }
    </div>
  );
};

export default DataPreviewer;
