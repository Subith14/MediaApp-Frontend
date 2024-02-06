// upload a video

import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"



export const uploadVideo = async(reqBody)=>{
    // callm POST http requst to "http://localhost:4000" to add video to json server and return response add component

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

// get all servers from json server 

export const getAllVideo = async ()=>{
    // make get http requst to "http://localhost:4000" to get all video from json server to view component 

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

// get a video from json server 

export const getAVideo = async (id)=>{
    // make get http requst to "http://localhost:4000" to get a video from json server to view component 

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

// remove video from json server 

export const deleteVideo = async (id)=>{
    // make get http requst to "http://localhost:4000" to delete a video from json server 

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}
//store watch history in json server

export const addToHistory = async(videoDetails)=>{
    // make POST http request to "http://localhost:4000/history" to add watchHistory to the json server and return response to videocard

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)

}

//get all watching video history
export const getAllHistory = async()=>{
    // make get http request to "http://localhost:4000/history" to get all video watchHistory from json server to watchHistory component
    return await commonAPI("GET",`${serverUrl}/history`,"") 
}

//delete watching video history
export const deleteHistory = async(id)=>{
    // make delete http request to "http://localhost:4000/history/id" to delete watch video History from json server to watchHistory component
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{}) 
}


//Add a category to JSON Server
export const addCategory = async(reqBody)=>{
    // make POST http request to "http://localhost:4000/categories" to add video to json server and return response category component

    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}


//GET all category to JSON Server
export const getAllCategory = async()=>{
    // make GET http requst to "http://localhost:4000/categories" to get video to json server and return response category component

    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

//DELETE  category from JSON Server
export const deleteCategory = async(id)=>{
    // make DELETE http requst to "http://localhost:4000/categories/id" to DELETE video from json server and return response category component

    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

//UPDATE  category from JSON Server
export const updateCategory = async(id,body)=>{
    // make UPDATE http requst to "http://localhost:4000/categories/id" to UPDATE particular category to json server and return response category component

    return await commonAPI("UPDATE",`${serverUrl}/categories/${id}`,body)
}

