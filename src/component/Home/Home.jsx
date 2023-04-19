import React from 'react';
import Booklist from './Booklist';
import Card from './Card';
import { useGetbookQuery } from '../../features/Book/bookslice';
import { useSelector } from 'react-redux';

const Home = () => {
  const {data:book,isLoading,isError}=useGetbookQuery()
  const {filters,search}=useSelector(state=>state.filter)
  let content=null
 if(isLoading) content=<h1>Loading....</h1>
 if(!isLoading && isError) content=<div>Something is rong Error</div>
 if(!isLoading && !isError && book?.length === 0) content=<div>Video is not found</div>
 if(!isLoading && !isError && book?.length > 0) content=book.filter(book=>{
   if(filters === "featured"){
    return !book.featured
   }else{
    return true
   }
 }).filter(sire=>(sire.name.toLowerCase().includes(search.toLowerCase())))
 .map(b=><Card key={b.id} book={b}></Card>)
    return ( 
  <main class="py-12 px-6 2xl:px-6 container">
  <div class="order-2 xl:-order-1">
    <Booklist></Booklist>
    <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* <!-- Card 1 --> */}
      {content}
    </div>
  </div>
</main>
    );
};

export default Home;