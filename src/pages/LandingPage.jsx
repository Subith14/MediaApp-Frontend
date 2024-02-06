import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'





function LandingPage() {

  const navigateByUrl = useNavigate()

  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome To <span className='text-warning'>Media Player</span> </h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic odit delectus sint esse dolorem sit mollitia 
          ipsum ipsa, dolorum praesentium quidem veniam repudiandae incidunt minima iure sunt, officiis placeat corrupti?</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img className='img-fluid' src="https://i.gifer.com/7d20.gif" alt="player" />
      </Col>
      <Col></Col>
    </Row>

    <div className="container mt-5 mb-5 d-flex align-items-center  flex-column">
      <h3>Features</h3>
      <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-center w-100'>
      <Card className='p-4' style={{ width: '22rem',height:'30rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/db6xomb-aeb6b8e0-26f3-4972-9c3a-f782faa2713a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiMzcxZDU4LWY2OTQtNDk1My1hMmU1LWM3OWFjZWRkOWY1NlwvZGI2eG9tYi1hZWI2YjhlMC0yNmYzLTQ5NzItOWMzYS1mNzgyZmFhMjcxM2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nC6dgEmhzwhEM9xjPcMIP_LXPSgNP2qreUVkQM8uLiQ" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4 mx-5' style={{ width: '22rem', height:'30rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.giphy.com/avatars/dijitalenstitu/pRVHyYtSyCPW.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem', height:'30rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

      </div>
    </div>

    <div className="container p-5 border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <div className="col-lg-5">
      <h3 className='mb-5 text-warning'>User Friendly,Fast & Compactable</h3>
<h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis
 ratione ad nulla, repellat obcaecati illo! Harum, pariatur. Obcaecati dolores voluptate dolore sint voluptatibus
  at in. Aliquam voluptates voluptatibus blanditiis?</h6>

  <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Categorized Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis
 ratione ad nulla, repellat obcaecati illo! Harum, pariatur. Obcaecati dolores voluptate dolore sint voluptatibus
  at in. Aliquam voluptates voluptatibus blanditiis?</h6>

  <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis
 ratione ad nulla, repellat obcaecati illo! Harum, pariatur. Obcaecati dolores voluptate dolore sint voluptatibus
  at in. Aliquam voluptates voluptatibus blanditiis?</h6>
      </div>
      <div className="videos col-lg-5">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/p693u53Q10U?si=sxhRVHmIxlmmQNki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    </>
  )
}

export default LandingPage