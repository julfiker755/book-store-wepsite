import React, { useState } from 'react';
import { useEditbookMutation } from '../../features/Book/bookslice';
import { useNavigate } from 'react-router-dom';

const From = ({book}) => {
    const {id,name:initialname,author:initialauthor,thumbnail:initalthumbnail,price:initialprice,rating:initirating,featured:initialfeatured}=book
    const [editbook,{isLoading,isSuccess}]=useEditbookMutation()
    const [name,setname]=useState(initialname)
    const [author,setauthor]=useState(initialauthor)
    const [thumbnail,setimg]=useState(initalthumbnail)
    const [price,setprice]=useState(initialprice)
    const [rating,setrating]=useState(initirating)
    const [featured,setdis]=useState(initialfeatured)
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault()
        editbook({
            id,
            data:{
                name,
                author,
                thumbnail,
                price,
                rating,
                featured
              }
        })
        navigate("/")
      }
   return (
          <main class="py-6 2xl:px-6">
          <div class="container">
              <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                  <h4 class="mb-8 text-xl font-bold text-center">Edit New Book</h4>
                  <form onSubmit={handlesubmit} class="book-form">
                      <div class="space-y-2">
                          <label for="lws-bookName">Book Name</label>
                          <input value={name} onChange={(e)=>setname(e.target.value)} required class="text-input" type="text" id="lws-bookName" name="name" />
                      </div>
  
                      <div class="space-y-2">
                          <label for="lws-author">Author</label>
                          <input value={author} onChange={(e)=>setauthor(e.target.value)} required class="text-input" type="text" id="lws-author" name="author" />
                      </div>
  
                      <div class="space-y-2">
                          <label for="lws-thumbnail">Image Url</label>
                          <input value={thumbnail} onChange={(e)=>setimg(e.target.value)} required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                      </div>
  
                      <div class="grid grid-cols-2 gap-8 pb-4">
                          <div class="space-y-2">
                              <label for="lws-price">Price</label>
                              <input value={price} onChange={(e)=>setprice(e.target.value)} required class="text-input" type="number" id="lws-price" name="price" />
                          </div>
  
                          <div class="space-y-2">
                              <label for="lws-rating">Rating</label>
                              <input value={rating} onChange={(e)=>setrating(e.target.value)} required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                                  max="5" />
                          </div>
                      </div>
  
                      <div class="flex items-center">
                          <input value={featured} onClick={()=>setdis(!dis)} id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" />
                          <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                      </div>
  
                      <button  className='bg-[#189490] py-2 w-full text-white'>Update Book</button>
                  </form>
                  {isLoading && <div>Loading......</div>}
                  {isSuccess && <div className='bg-[#0b690e] text-white mt-5'>Hello your data successfulll</div>}
              </div>
          </div>
      </main>
      );
  };

export default From;