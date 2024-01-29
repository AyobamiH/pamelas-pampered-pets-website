import React from "react"
import { Link } from "react-router-dom"
import aboutimage1 from '../../public/images/aboutimage1.svg'
import aboutimageone from '../../public/images/aboutimageone.png'
import Image3 from '../assets/image/Image3.svg'
import Image2 from '../assets/image/Image2.svg'
import Image22 from '../../public/images/Image22.svg'
import './LandingPage.css'; // Import the CSS file
import './AboutPage.css'
import Image from '../assets/image/Image.svg'

const About = () => {

    const styles = {
        container: {
      fontFamily: 'Arial, sans-serif',
      color: '#40E0D0', // turquoise blue
      width: '100%',
      height:'auto'
    },
        stats: {
        display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: '160px',
      backgroundColor: '#fff',
      boxShadow: '2px 0px 10px rgba(3,3,3,0.1)',
      margin:  '70px auto 0 auto'
    },
    statBox: {
       flex: '1',
      textAlign: 'center',
      padding: '20px',
      margin: '0 10px',
      border: '0 10px',
      width: '298px',
      height: '112px',
      backgroundColor: '#40bfe0',
      borderRadius: '2px',
    },
     aboutImageContainer: {
        flex: '1',
        textAlign: 'center',
        margin:'50px',
        padding:'10px',
        height:'auto'

     },

    
    section: {
      padding: '50px 20px',
      textAlign: 'center',
      marginBottom: '40px', // Added margin bottom for spacing
      width: '100%',
      height: '414px',
      backgroundColor: '#40bfe0',
    },
    h1: {
      color: '#2c3e50',
      fontSize: '48px',
      fontFamily: 'Roboto Mono',
      fontWeight: 500,
      lineHeight: '60px',
      textAlign: 'center',
    },
    h2: {
      color: '#2c3e50',
      fontSize: '30px',
      fontFamily: 'Roboto Mono',
      fontWeight: 500,
      lineHeight: '50px',
      textAlign: 'center',
      marginBottom:'20px',
    },
    p: {
      color: '#2c3e50',
      fontSize: '18px',
      fontFamily: 'Roboto Mono',
      fontWeight: 300,
      lineHeight: '24px',
      textAlign: 'center',
      marginBottom: '1em', /* Add space between paragraphs */
      lineHeight: '1.6', /* Maintain line spacing within paragraphs */
      letterSpacing:' 0.03em',  /* Slightly increase space between letters */
      whiteSpace: 'wrap',
      textIndent: '20px',
     
    },
    h3: {
      color: '#2c3e50',
      fontSize: '30px',
      fontFamily: 'Roboto Mono',
      fontWeight: 500,
      lineHeight: '36px',
      textAlign: 'center',
      marginBottom:'20px',
    },
    aboutImage: {
  
    top: '396px',
    left: '2px',
    width: '1440px',
    height: '696px',
   
  },
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    height:'auto',
    marginTop:'50px',
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'#fff',
   

  },
  aboutText: {
    flex: '1',
    margin: '20px',
    lineHeight:'35px',
    
  },
  button: {
      cursor: 'pointer',
      top: '1326px',
      left: '554px',
      width: '332px',
      height: '36px',
      padding: '0px 8px',
      border: '1px solid #030303',
      boxSizing: 'border-box',
      boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
      backgroundColor: '#ffffff',
      color: '#2c3e50',
      fontSize: '18px',
      fontFamily: 'Roboto Mono',
      lineHeight: '23px',
      textTransform: 'uppercase',
      outline: 'none',
      marginTop: '80px',
    }
    
  
}

    return(
    <>
        <div className="container">
            <section className="about">
        <h2>About Us</h2>
        <h3>Caring for pets since 2016</h3>
        <div className="image-overlay">
          <img src={aboutimageone} alt="Pet" className="hero-image" />
        </div>
      </section>

            <section style={styles.section}>
                <h2 style ={styles.h2}>All your pet needs in one place</h2>
                <p style ={styles.p}>Professional pet care services, grooming, and more in one convenient location.</p>
                <button style={styles.button}>Get Started</button>
                {console.log('about page')}
                <div style={styles.stats}>
                <div style={styles.statBox}>
                    <h3 style={styles.h3}>12 Million</h3>
                    <p style={styles.p}>Happy pets and satisfied</p>
                </div>
                <div style={styles.statBox}>
                    <h3 style={styles.h3}>Top Rated</h3>
                    <p style={styles.p}>Leading pet care provider</p>
                </div>
                <div style={styles.statBox}>
                    <h3 style={styles.h3}>100+</h3>
                    <p style={styles.p}>Clients served</p>
                </div>
                <div style={styles.statBox}>
                    <h3 style={styles.h3}>20</h3>
                    <p style={styles.p}>Recognitions</p>
                </div>
                </div>
            </section>

            {/* About Section */}
      <div  id='about' style={{ height:'auto'}}>
      
      <div style={styles.aboutSection}>
        <div style={styles.aboutText}>
          <h2 style={styles.h3}>About Me</h2>
          <p style={styles.p} >Your premier choice for professional pet care in Seattle, Washington! </p>
          
          <p style={styles.p}>
            I'm Pam, the owner of Pamela's Pampered Pets. With over 20 years in the pet care industry, I've built a trusted business serving pet owners across Seattle and Washington state.
            I know your pets are family, so I offer personalized care to meet their unique needs. As a licensed, insured, CPR, and First Aid certified business, your pet's safety is my priority.
            From daily walks to overnight stays, I treat each pet with love and care, ensuring they feel comfortable and happy while you're away.
            For pet sitting, overnight care, or special needs services in Seattle, choose Pamela's Pampered Pets. Book a spot for your furry friend today!
          </p>
          

        </div>
        <div style={styles.aboutImageContainer}>
          <img src={Image} alt="Our Vision" style={styles.aboutImage} />
        </div>
      </div>

    </div>
  </div>

 <section className="join-team">
        <h3>Join Our Team</h3>
        <div className="team-options">
          <div className="image-overlay">
            <img src={Image3} alt="Workplace" />
            <p>Our pet-friendly workplace culture</p>
          </div>
          <div className="image-overlay">
            <img src={Image2} alt="Office" />
            <p>Visit our pet-friendly offices</p>
          </div>
          <div className="image-overlay">
            <img src={Image3} alt="Opportunities" />
            <p>Explore job opportunities</p>
          </div>
        </div>
      </section>
      <section className="blog">
        <h3>Pet Care Blog</h3>
        <div className="blog-posts">
          <div className="image-overlay">
            <img src={Image22} alt="Pet Health" />
            <h4>How to keep your pet healthy and happy</h4>
            <p>Expert advice from pet care</p>
            <button className="discover-more">DISCOVER MORE</button>
          </div>
          <div className="image-overlay">
            <img src={aboutimage1} alt="Budget" />
            <h4>Tips for managing your pet's budget</h4>
            <p>Budgeting tips for pet owners</p>
            <button className="explore-more">EXPLORE MORE</button>
          </div>
          
            <div className="image-overlay">
            <img src={aboutimage1} alt="Budget" />
            <h4>Tips for managing your pet's budget</h4>
            <p>Budgeting tips for pet owners</p>
            <button className="explore-more">DISCOVER MORE</button>
            </div>
            
          
        </div>
      </section>
        
    </>
    )
}
export default About







