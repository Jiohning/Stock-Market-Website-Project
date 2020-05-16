import React from 'react';

import TopNav from '../components/TopNav';
import GeneralNews from '../components/GeneralNews';
import ErrorMessage from '../components/ErrorMessage';


const NewsPage = () => {
  return(
    <>
      <TopNav/>
      <ErrorMessage/>
      <GeneralNews/>
    </>
  );
}

export default NewsPage;