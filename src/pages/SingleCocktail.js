import React from "react";
import {useParams} from 'react-router-dom';

const SingleCocktail = () => {
  const {id} = useParams();
  return (
    <>
      <h1>SingleCocktail Page | id: {id}</h1>
    </>
  );
};

export default SingleCocktail;
