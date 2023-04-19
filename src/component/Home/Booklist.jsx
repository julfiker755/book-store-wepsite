import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { updatefilters } from '../../features/filter/filterslice';

const Booklist = () => {
  const [filters,setfilters]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(updatefilters({filters}))
  },[filters])
    return (
        <div class="flex items-center justify-between mb-12">
      <h4 class="mt-2 text-xl font-bold">Book List</h4>

      <div class="flex items-center space-x-4">
        <button onClick={()=>setfilters("")} class="lws-filter-btn active-filter">All</button>
        <button onClick={()=>setfilters("featured")} class="lws-filter-btn">Featured</button>
      </div>
    </div>
    );
};

export default Booklist;