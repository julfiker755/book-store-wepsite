import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const bookslice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:9000/'
    }),
    tagTypes:["books","book"],
    endpoints:(builder)=>({
        getbook:builder.query({
            query:()=>'/books',
            providesTags:["books"]
            
        }),
        gatbooks:builder.query({
            query:(id)=>`/books/${id}`,
            invalidatesTags:(result,error,arg)=>[{name:'book',id:arg}]
        }),
        addbook:builder.mutation({
            query:(data)=>({
                url:'/books',
                method:'POST',
                body:data,
            }),
            invalidatesTags:["books"]
        }),
        editbook:builder.mutation({
            query:({id,data})=>({
                url:`/books/${id}`,
                method:'PATCH',
                body:data,
            }),
            invalidatesTags:(result,error,arg)=>["books",{name:'book',id:arg.id}]
        }),
        deletebook:builder.mutation({
            query:(id)=>({
                url:`/books/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:["books"]
        })
    })
})

export const {useGetbookQuery,useGatbooksQuery,useAddbookMutation,useEditbookMutation,useDeletebookMutation}=bookslice