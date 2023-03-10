import "./contact.css";
import{MdEmail} from "react-icons/md";
function Contact() {
    return (  

        <div id="contactbody">




      
<div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
			<div id="Mail">
			<MdEmail/>
			</div>
			
				<h5>Contact Us</h5>
				<p>We would love to hear from you</p>
			</div>
		</div>
		<div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
				  <label class="control-label col-sm-2" for="fname">First Name:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="lname">Last Name:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="email">Email:</label>
				  <div class="col-sm-10">
					<input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div class="form-group">
				  <label class="control-label col-sm-2" for="comment">Comment:</label>
				  <div class="col-sm-10">
					<textarea class="form-control" rows="5" id="comment"></textarea>
				  </div>
				</div>
				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-10">
					<br/>
					<button type="submit" class="btn btn-default">Submit</button>
					
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>

        </div>


    );
}

export default Contact;