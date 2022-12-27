import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { selectPage } from "../../features/movieList/movieListSlice";
import Button from "./Button";
import { Wrapper } from "./styled";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const page = useSelector(selectPage);
  console.log(page);

  const [counter, setCounter] = useState(1);

  // useEffect(()=>{
  //   dispatch(setPage(counter))
  // },[counter])

  return (
    <Wrapper>
      <Button onClick={() => setCounter(1)} title="First" />
      <Button onClick={() => setCounter(counter - 1)} title="Previous" />
      <p>Page {page} of 500</p>
      <p> counter {counter}</p>
      <Button onClick={() => setCounter(counter + 1)} rotate title="Next" />
      <Button onClick={() => setCounter(500)} rotate title="Last" />
    </Wrapper>
  );
};

export default Footer;
