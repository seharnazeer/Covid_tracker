import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
import {Box} from "@mui/material";
import styled from "@emotion/styled";

export const Piechart=({specificdata})=>{
    Chart.register(ArcElement);
    const {TotalConfirmed,TotalDeaths,countryname}=specificdata;
    const StyledBox=styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        width:"18rem",
        margin:'auto'
      }))
    return(
       <StyledBox>
        <Pie
    data={{
      labels: ["Confirmed", "Deaths"],
      datasets: [
        {
          label: "People",
          backgroundColor: [
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 255, 0, 0.5)",
          ],
          hoverBackgroundColor: [
            "rgba(0, 77, 153)",
            "rgba(30, 102, 49)",
          ],
          borderWidth:0,
          data: [
           TotalConfirmed,
           TotalDeaths
          ],
        },
      ],
    }}
    options={{
      legend: { display: true },
      title: { display: true, text: `Current state in ${countryname}` },
    }}
 
  />
  </StyledBox>
    )
}