'use client'

import { useEffect, useState } from "react";
import { Pagination, Loader, Box } from "@mantine/core";

import { TableOfData } from "../components/TableOfData/TableOfData";
import { useUserDataContext } from "../context/UsersDataContext";

import classes from './page.module.css'
import data from "../store/user_data.json"

export default function HomePage() {
  const paginationAmount = 10;
  const { jsonData, setJsonData, changedUserData, setChangedUserData } = useUserDataContext();
  const [page, setPage] = useState<number>(1);

  //setting initial data 
  useEffect(() => {
    setJsonData(data)
    setChangedUserData(data.slice((page - 1) * paginationAmount, page * paginationAmount))
  },[]);

  // Paginating data
  const setPageHandler = (page: number) => {
    setChangedUserData(jsonData.slice((page - 1) * paginationAmount, page * paginationAmount))
    setPage(page);
  };

  return (
      <section className={classes.main}>
      {jsonData.length !== 0 && <TableOfData elementFromOurData={changedUserData} /> }
      {jsonData.length === 0 &&  (<Box style={{height: "80vh",display:'flex', alignItems:'center', justifyContent:'center'}}><Loader /></Box>)}
    
       <Pagination className={classes.paginationBox} value={page} onChange={setPageHandler} total={jsonData.length / paginationAmount} />
    
      </section>
  );
}
