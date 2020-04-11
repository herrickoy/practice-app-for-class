import React from 'react'

export default function() {
  return (
      <div className="contact-page-wrapper">
          <h2>Contact Koy</h2>

          <form className="forms-wrapper">

                  <div className="three-column ptags">
                      <p>First Name</p>
                      <p>Last Name</p>
                      <p>Nick Name</p>
                  </div>


                  <div className="three-column">
                      <input type="text"
                        name="firstName"
                        placholder="First Name"
                        className="box"
                      />  

                      <input type="text"
                        name="lastName"
                        placholder="Last Name"
                        className="box"
                      />

                      <input type="text"
                        name="nickName"
                        placholder="NickName"
                        className="box"
                      />
                  </div>

                  <div className="three-column ptags">
                      <p>Reason</p>
                      <p>Message Description</p>
                      <p>Return @email adress</p>
                  </div>

                  <div className="three-column">
                      <input type="text"
                        name="reason"
                        placholder="Message reason"
                        className="box"
                      />  

                      <input type="text"
                        name="description"
                        placholder="Message description"
                        className="box"
                      />

                      <input type="email"
                        name="returnEmail"
                        placholder="Return email address"
                        className="box"
                      />
                  </div>

                  <div className="one-column ptags">
                    <p>Type message here</p>
                  </div>
                  <div className="one-column">
                      <textarea
                        className="text-area-style"
                        name="messageArea"
                        placholder="Type your message"
                      />  
                  </div>

                  <div className="one-column">
                    <button className="contact-button">Send Message</button>
                  </div>
              </form>
      </div>    
  )
}