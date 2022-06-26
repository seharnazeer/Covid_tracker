const {isArray} = require('lodash')
let countriesdata;
let countrywisedata='';
let countryname;
let dates=[];
export const getdata=async()=>{
  let country=[];
    const data=await fetch('https://api.covid19api.com/summary');
     const realdata=await data.json();
     console.log(realdata);
    const extractcountry=realdata["Countries"];
    countriesdata=realdata["Countries"];
    extractcountry.map((elem,index)=>{
      country.push({"id":index,"name":elem.Country});
    })
    return country;   
  }
  export const setdata=(id)=>{
   countryname=countriesdata[id]["Country"];
    const {TotalConfirmed,TotalDeaths,Country}=countriesdata[id];
    countrywisedata=Country;
     return {
      TotalConfirmed,
      TotalDeaths,countryname
     };

}
export const bardata=async (year,from)=>{
  console.log(year,from)
  const single=(countrywisedata.toLowerCase()).split();
  let singlecountry;
  if(single.length>1){
    singlecountry=single.join("-");
    }
    else{
      singlecountry=single;
    }

  console.log(singlecountry);
  const totalcases=[];
  await fetch(`https://api.covid19api.com/country/${singlecountry}/status/confirmed?from=${year}-${from}-01T00:00:00Z&to=${year}-${1+parseInt(from)}-01T00:00:00Z`)
  .then((res) => res.json())
  .then((data) => data.map((ele) => {
    const {Cases,Date}=ele;
    totalcases.push(Cases);
  }))
  .catch((error) => console.log(error));
  
  return {
    totalcases,
    countryname
  };
 
  

}
