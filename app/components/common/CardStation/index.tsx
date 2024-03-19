"use client";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import CardRute from "../CardRute";
import { useQuery } from 'react-query';
import axios from 'axios';
import React from "react";

const CardStation = () => {
  const apiUrl = 'https://www.api.comuline.com/v1/schedule/AC';
  const { data, isLoading, isError } = useQuery('stationData', async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data from API');
    }
  });
  
  React.useEffect(() => {
    if (data) {
      console.log('Data from API:', data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data from API</p>;
  }

  return (
    <div className="w-full flex flex-col justify-between mt-5 mb-10 md:mt-5 md:mb-16">
      {/* STATION TITLE */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-foreground/80 font-mono text-sm">Stasiun</p>
          <p className="text-3xl font-mono font-extrabold">Bogor</p>
        </div>
        <MdOutlineKeyboardArrowUp className="text-xl text-foreground/50 cursor-pointer hover:text-foreground/100" />
      </div>

      {/* RUTE DAN JADWAL */}
      <div className="flex mt-3">
        <div className="w-full">
          <CardRute />
        </div>
      </div>
    </div>
  );
};
export default CardStation;