import React, { useState,useEffect } from "react";
import {Box,styled} from "@mui/material";
import { Line, Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {bardata} from "../api"
// import styled from "@emotion/styled";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Barchart=({year,from})=>{
  Chart.register(CategoryScale);
  Chart.register(ArcElement);
    const [data,setdata]=useState([]);
    useEffect(()=>{
    const getdata=async()=>{
            setdata(await bardata(year,from));
        }
            getdata();
    },[year,from])
    const {totalcases,countryname}=data;
    console.log(countryname);
    let dates=[];
    for(let i=1;i<=30;i++){
      i=i<10?"0"+i:i;
      dates.push(i);
    }
    const StyledBox=styled(Box)(({theme})=>({
      display:'flex',
      justifyContent:'center',
      width:"90vw",
      margin:'auto',
      [theme.breakpoints.up("sm")]:{
        width:'50vw',
        height:'40vh'
      }
    }))

    return(
    <>{ totalcases!==undefined?
      <StyledBox>
      <Line
      data={{
        labels:dates.map((ele)=>ele),
        datasets: [
          {
            data: totalcases.map((confirmed) => confirmed),
            label: `Confirmed Cases ${countryname}`,
            // borderColor: "#3333ff",
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true,
          }
        ],
      }}
    /></StyledBox>:null
    }
        
    </>
    )
}