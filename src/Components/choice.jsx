import React,{useState,useEffect} from "react"
import { Select,MenuItem ,FormControl,InputLabel,Box} from "@mui/material"
import {getdata,setdata} from "../api/index"
import styled from "@emotion/styled";
import {Main} from "./index"
import {Barchart, Piechart} from "../charts"
export const Choice=({settype,rearrange})=>{
     const [country,setcountry]=useState([]);
     const [specificdata,setspecific]=useState({})
     const [no,setno]=useState("");
     const [chart,setchart]=useState("");
     const [year,setyear]=useState("");
     const [from,setfrom]=useState("");
     const [display,setdisplay]=useState("");
     const [to,setto]=useState();
     const Year=["2020","2021","2022"];
    useEffect(()=>{
       const get=async ()=>{
        setcountry(await getdata());
       }
       get();
     },[]);
     let counting=[];
        for (let i=1;year==="2022"?i<=5:i<=11;i++){
            if(i<10){
                i='0'+i;
            }
            counting.push(i);
        }
    const charts=["Pie Chart","Line Chart"]
    const StyledBox=styled(Box)(({theme})=>({
        display:'flex',
        width:'100vw',
        justifyContent:'center',
        margin:'1rem auto'
    }))
    return(
        <>
        <StyledBox>
        <FormControl variant="filled" sx={{width:{sm:'10rem',md:'10rem',xs:'10rem',lg:'17rem',xl:'17rem'}}}>
            <InputLabel>Select Country</InputLabel>
     <Select labelId="country-name" value={no}  label="Select Country" onChange={(event)=>setno(event.target.value)}>
        {
            country.map((elem,index)=>{
                const {id,name}=elem;
                return(
                <MenuItem key={index} value={id} onClick={()=>setspecific(setdata(id))}>{name}</MenuItem>
                )
            })
        }

     </Select>
     </FormControl>
     <FormControl variant="filled" sx={{width:{sm:'12rem',xs:'10rem',md:'12rem',lg:'17rem',xl:'17rem'}}}>
        <InputLabel>Select Chart Type</InputLabel>
        <Select labelId="chart-type" value={chart} onChange={(event)=>setchart(event.target.value)}>
            {
                charts.map((elem,index)=>(
                    <MenuItem key={index} value={elem} onClick={()=>setdisplay(elem)} >{elem}</MenuItem>
                ))
            }
         
        </Select>

     </FormControl>
     </StyledBox>
     {
        display.includes("Line Chart")?  <Box component={'div'} sx={{display:'flex',justifyContent:'center'}}>
        <FormControl variant="filled" sx={{width:'10rem'}}>
           <InputLabel>Select Year</InputLabel>
           <Select value={year} onChange={(event)=>setyear(event.target.value)}>
               {
                   Year.map((elem,index)=>(<MenuItem key={index} value={elem}>{elem}</MenuItem>))
               }
   
           </Select>
   
        </FormControl>
        <FormControl variant="filled" sx={{width:'10rem'}}>
           <InputLabel>Started Month</InputLabel>
           <Select value={from} onChange={(event)=>setfrom(event.target.value)}>
               {
                 counting.map((elem,index)=>(
                   <MenuItem key={index} value={elem}>{elem}</MenuItem>
                 ))
               }
   
           </Select>
        </FormControl>
        </Box>:null
     }
     
     <Main specificdata={specificdata}/>
     {
         display.includes("Pie Chart")?<Piechart  specificdata={specificdata} />:null
     }
     {
        display==="Line Chart"&&year!==""&&from!==""?<Barchart year={year} from={from} />:null
     }
     
     </>
    )

}