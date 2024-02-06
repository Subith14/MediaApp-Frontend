import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=' text-light '>
      <MDBFooter bgColor='info' className='text-center text-lg-start  '>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 '>
          <MDBIcon color='white' fab icon='facebook-f' />
        </a>
        <a href='' className='me-4 text-light'>
          <MDBIcon color='white' fab icon='twitter' />
        </a>
        <a href='' className='me-4 '>
          <MDBIcon color='white' fab icon='google' />
        </a>
        <a href='' className='me-4 '>
          <MDBIcon color='white' fab icon='instagram' />
        </a>
        <a href='' className='me-4 '>
          <MDBIcon color='white' fab icon='linkedin' />
        </a>
        <a href='' className='me-4 '>
          <MDBIcon color='white' fab icon='github' />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5 '>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <Link to={'./'} className='fs-4' style={{textDecoration:'none',color:'white'}}>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='white' icon='gem' className='me-3' />
              Media Player
            </h6>
            </Link>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset text-decoration-none '>
                Angular
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Vue
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset text-decoration-none'>
                Laravel
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
            <p>
              <Link style={{
                textDecoration:'none',color:'white'
              }} to={'./home'}>Home</Link>
            </p>
            <p>
            <Link style={{
                textDecoration:'none',color:'white'
              }} to={'./LandingPage'}>Landing Page</Link>
            </p>
            <p>
            <Link style={{
                textDecoration:'none',color:'white'
              }} to={'./WatchHistory'}>Watch History</Link>
            </p>
           
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon color='white' icon='home' className='me-2' />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon color='white' icon='envelope' className='me-3' />
              info@example.com
            </p>
            <p>
              <MDBIcon color='white' icon='phone' className='me-3' /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon color='white' icon='print' className='me-3' /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright: 
      <a className='text-reset fw-bold text-decoration-none' href='https://mdbootstrap.com/'>
        &nbsp;MediaPlayer.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer