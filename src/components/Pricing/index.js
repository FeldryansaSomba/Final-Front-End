export default function index() {
    return (
        <section id="pricing">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 text-center">
          <div className="section-title">
            <strong>05</strong>
            <h1 className="heading bold">OUR PRICING</h1>
            <hr />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="plan plan-one wow bounceIn" data-wow-delay="0.3s">
            <div className="plan_title">
              <i className="icon-mobile medium-icon" />
              <h3>BASIC</h3>
              <h2>$150 <span>per year</span></h2>
            </div>
            <ul>
              <li>100 GB Cloud Storage</li>
              <li>5 Pro Websites</li>
              <li>10 Secured Emails</li>
              <li>24-hour Support</li>
            </ul>
            <button className="btn btn-warning">Get it now</button>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="plan plan-two wow bounceIn" data-wow-delay="0.3s">
            <div className="plan_title">
              <i className="icon-desktop medium-icon" />
              <h3>BUSINESS</h3>
              <h2>$260 <span>per year</span></h2>
            </div>
            <ul>
              <li>200 GB Cloud Storage</li>
              <li>10 Pro Websites</li>
              <li>20 Secured Emails</li>
              <li>30-Minute Support</li>
            </ul>
            <button className="btn btn-warning">Take this!</button>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="plan plan-three wow bounceIn" data-wow-delay="0.3s">
            <div className="plan_title">
              <i className="icon-cloud medium-icon" />
              <h3>PROFESSIONAL</h3>
              <h2>$380 <span>per year</span></h2>
            </div>
            <ul>
              <li>500 GB Cloud Storage</li>
              <li>20 Pro Websites</li>
              <li>40 Secured Emails</li>
              <li>Live Support</li>
            </ul>
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </div>		
  </section>
    )
}
