import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Work() {

const [work, setWork] = useState([])

useEffect(()=>{
    axios.get("http://localhost:3004/work").then(res => setWork(res.data))
}, [])

console.log(work)

    return (
        <section id="work">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title">
            <strong>01</strong>
            <h1 className="heading bold">WHAT WE DO</h1>
            <hr />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
          <i className="icon-cloud medium-icon" />
          <h3>WEB MARKETING</h3>
          <hr />
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
          <i className="icon-mobile medium-icon" />
          <h3>UI &amp; UX DESIGN</h3>
          <hr />
          <p>Digital Team is free responsive Bootstrap v3.3.5 layout from <a rel="nofollow" href="http://www.tooplate.com" target="_parent">Tooplate</a>. Images are from <a rel="nofollow" href="http://pixabay.com" target="_parent">Pixabay</a> free photo website.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
          <i className="icon-laptop medium-icon" />
          <h3>ECOMMERCE</h3>
          <hr />
          <p>You can edit and use this template for your websites. Please tell your friends about Tooplate. Thank you for visiting our website.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
          <i className="icon-compass medium-icon" />
          <h3>MOBILE APP</h3>
          <hr />
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
          <i className="icon-chat medium-icon" />
          <h3>SOCIAL MEDIA</h3>
          <hr />
          <p>You can easily change icons by looking at <a href="https://www.elegantthemes.com/blog/resources/how-to-use-and-embed-an-icon-font-on-your-website" target="_blank">ET Line Icons</a>. Excepteu sunt in culpa qui officia. Duis aute irure dolor in reprehenderit.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
          <i className="icon-browser medium-icon" />
          <h3>RESPONSIVE LAYOUT</h3>
          <hr />
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu sunt in culpa qui officia.</p>
        </div>
      </div>
    </div>
  </section>
    )
}
