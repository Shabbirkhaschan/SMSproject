import "./footer.css";
function Footer1() {
    return ( 

           <div>
 <div className='text-center p-3' style={{ backgroundColor:"white" }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text' href='https://mdbootstrap.com/'>
          School Management System.com
        </a>
      </div>
           </div>


     );
}

export default Footer1;