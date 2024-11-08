import React from "react";

export default function Delete() {
  return (
    <div className="py-10 px-10 md:px-20 w-full md:w-[75%] mx-auto">
      <h1 className="text-3xl font-medium pb-5 text-center">
      Manago Manpower - Delete Account
      </h1>
        <div className="our-patner  ">
          <div className="our-patners-holder">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="about-sec">
                    <div className="main-heading-holder">
                      <div className="main-heading">
                        <h2 className="">If you want to delete the account please fill the information below.</h2>
                        <form>
										<div className="">
										   <div className="form-group">
											  <label>Mobile No</label>
											  <input type="text" id="mobile_no" name="mobile_no" className="form-control" />
											  <div className="error" id="mobile_err"></div>
										   </div>
										   <div className="form-group">
											  <button type="button" className="sbut-btn popUpBtn" data-modal="myModal1">Submit</button>
										   </div>
										</div>
										<div className="error" id="response"></div>
									 </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
