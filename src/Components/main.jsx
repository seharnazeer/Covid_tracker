import React from "react";
import {Box,Typography,Paper} from "@mui/material"
import styled from "@emotion/styled";
import {Chart} from "react-google-charts";
export const Main =({specificdata})=>{
   const {TotalConfirmed,TotalDeaths}=specificdata;
    const options = {
        title: "Covid Report",
        is3D: true,
      };
      
    const Styledbox=styled(Box)(({theme})=>({
    display:'flex',
    width:'60vw',
    height:'auto',
    justifyContent:'center',
    padding:'1rem',
    margin:'auto'
    }))
    const Innerbox=styled(Paper)(({theme})=>({
        padding:'1.5rem',
        width:'30vw',
        height:'auto',
        margin:'0rem 1rem',
        textAlign:'center'

    }))
    const Styledtypo=styled(Typography)(({theme})=>({
      fontSize:'21px'
    }))
    return(<>
    <Styledbox>
       <Innerbox elevation={3}>
        <Styledtypo variant="h4" color="primary" >Confirmed Cases</Styledtypo>
        <Typography variant="h5">{TotalConfirmed}</Typography>
       </Innerbox>
       <Innerbox elevation={3}>
       <Styledtypo variant="h4" color="error" >Total Deaths</Styledtypo>
       <Typography variant="h5">{TotalDeaths}</Typography>
       </Innerbox>
    </Styledbox>
    {/* <Chart
        chartType="PieChart"
        data={data2}
        options={options}
        width={"100%"}
        height={"400px"}
      /> */}
      

    </>)

    
}