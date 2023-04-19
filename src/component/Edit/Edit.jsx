import React from 'react';
import From from './From';
import { useParams } from 'react-router-dom';
import { useGatbooksQuery } from '../../features/Book/bookslice';

const Edit = () => {
    const {eid}=useParams()
    const {data:book,isLoading,isError}=useGatbooksQuery(eid)
    let content=null
    if(isLoading) content=<h1>Loading......</h1>
    if(!isLoading && isError) content=<div>Your syestem error</div>
    if(!isLoading && !isError && book?.id) content=<From book={book}></From>
    return (
        <main class="py-6 2xl:px-6">
        <div class="container">
            <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
                 {content}
            </div>
        </div>
    </main>
    );
};

export default Edit;