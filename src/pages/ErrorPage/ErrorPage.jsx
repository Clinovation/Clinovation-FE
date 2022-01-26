import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ErrorImg from '../../icons/notfound.svg'
function ErrorPage() {
  return (
      <div>
        <div className='d-flex justify-content-center align-items-center'>
            <img src={ErrorImg} style={{height: "500px"}}/>
            <Link to='/'>
                <Button variant='info' size='lg'>
                    <div style={{color: "white"}}>
                        Back To Home
                    </div>
                </Button>
            </Link>
            
        </div>
        
      </div>
  );
}

export default ErrorPage;
