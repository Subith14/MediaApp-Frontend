import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category() {
  const[allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory= async ()=>{
    if(categoryName){
      //Create key for rendering list
      let body={
        categoryName,allVideos:[]
      }
    //make API call
    const response = await addCategory(body)
    console.log(response);
    if(response.status>=200 && response.status<300){
      //hide modal
      handleClose()
      //reset State
      setCategoryName("")
      //get categories
      getCategories()
    }else{
      toast.error("Something went wrong")
    }
    }else{
      toast.warning("Please provide category name!!!")
    }
  }

  const getCategories = async()=>{
    //make api call
    const {data}= await getAllCategory()
    // console.log(data);
    setAllCategories(data);
  }
  // console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[])


  const handleDelete = async(id)=>{
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e) => {
    console.log("Video drag over category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("Video dropped inside the category:"+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video card id:",videoId);
    //get video detail
    const {data}= await getAVideo(videoId)
    console.log(data);
    //get category details
    const selectedCategory = allCategories?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //make api call
    await updateCategory(categoryId,selectedCategory)
    getCategories()

  }



  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>
    {
      allCategories?.length>0?allCategories?.map(item=>(
        <div className='m-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
           <div className='d-flex justify-content-between align-items-center my-3'>
            <h4>{item?.categoryName}</h4>
            <button onClick={()=>handleDelete(item?.id)} className='btn ms-5'><i className='fa-solid fa-trash text-danger'></i></button>

           </div>
           <Row>
            {
              item?.allVideos && item?.allVideos.map(
                card=>(

                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true}/>

                </Col>
                )
                
              )
            }
           </Row>
        </div>

      )):<p className='fs-5 fw-5 text-danger'>No Categories Added</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form className='border border-secondary rounded p-3 '>
         
      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label>Enter Category Name</Form.Label>
        
        <Form.Control type="email" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
        
      </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000} />
    </>
  )
}

export default Category