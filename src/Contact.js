import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    
    <h2 className="common-heading">Contact Page</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.972959382674!2d77.60666857420495!3d12.973581314836613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179d1fe1bfc3%3A0xa63e929494d4f52a!2sZiniosEdge%20Software%20Technologies%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1690548964126!5m2!1sen!2sin" 
width="100%" height="450" 
style={{ border:0 }} allowFullScreen=""
 loading="lazy" title="theMap"
 referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
         <form action="https://formspree.io/f/mdoraoze" method="post" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off"  />
            <input type="email" placeholder="Enter Email" name="Email" required autoComplete="off" />
            <textarea name="Message" placeholder="Enter Your Message" cols="30" rows="10" required autoComplete="off"/>
            <input type="Submit" value="Send"/>
         </form>
      </div>
    </div>

  </Wrapper>;
};

export default Contact;
