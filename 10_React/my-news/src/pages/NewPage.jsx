import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

function NewPage(props) {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
}

export default NewPage;