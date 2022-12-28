import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "../../features/movieList/movieListSlice";
import Button from "./Button";
import { Wrapper } from "./styled";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrnetPage] = useState(1);

  // useEffect(()=>{
  //   dispatch(setPage(counter))
  // },[counter, dispatch])
  
  const firstPage = () => {
    setCurrnetPage(1);
  };
  const nextPage = () => {
    if (currentPage < 500) setCurrnetPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrnetPage(currentPage - 1);
  };
  const lastPage =() => {
    setCurrnetPage(500);
  };

  return (
    <Wrapper>
      <Button onClick={firstPage} title="First" />
      <Button onClick={prevPage} title="Previous" />
      <p>Page {currentPage} of 500</p>
      <Button onClick={nextPage} rotate title="Next" />
      <Button onClick={lastPage} rotate title="Last" />
    </Wrapper>
  );
};

export default Footer;
