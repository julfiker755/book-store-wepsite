import { configureStore } from '@reduxjs/toolkit'
import { bookslice } from '../features/Book/bookslice'
import filterslice from '../features/filter/filterslice'

export default configureStore({
  reducer: {
    [bookslice.reducerPath]:bookslice.reducer,
    filter:filterslice,
  },
  middleware:(getdefaultmiddleware)=>
   getdefaultmiddleware().concat(bookslice.middleware)
  
})