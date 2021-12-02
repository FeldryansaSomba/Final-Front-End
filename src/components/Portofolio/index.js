export default function Portofolio() {
    return (
        <div id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title">
            <strong>04</strong>
            <h1 className="heading bold">OUR PORTFOLIO</h1>
            <hr />
          </div>
          {/* ISO section */}
          <div className="iso-section">
            <ul className="filter-wrapper clearfix">
              <li><a href="#" data-filter="*" className="selected opc-main-bg">All</a></li>
              <li><a href="#" className="opc-main-bg" data-filter=".html">HTML</a></li>
              <li><a href="#" className="opc-main-bg" data-filter=".photoshop">Photoshop</a></li>
              <li><a href="#" className="opc-main-bg" data-filter=".wordpress">Wordpress</a></li>
              <li><a href="#" className="opc-main-bg" data-filter=".mobile">Mobile</a></li>
            </ul>
            <div className="iso-box-section wow fadeIn" data-wow-delay="0.9s">
              <div className="iso-box-wrapper col4-iso-box">
                <div className="iso-box html wordpress mobile col-lg-4 col-md-4 col-sm-6">
                  <a href="images/portfolio-img1.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img1.jpg" alt="portfolio img" /></a>
                </div>
                <div className="iso-box wordpress col-lg-4 col-md-4 col-sm-6">
                  <a href="images/portfolio-img2.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img2.jpg" alt="portfolio img" /></a>
                </div>
                <div className="iso-box html mobile col-lg-4 col-md-4 col-sm-6">
                  <a href="images/portfolio-img3.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img3.jpg" alt="portfolio img" /></a>
                </div>
                <div className="iso-box wordpress col-lg-4 col-md-4 col-sm-6">
                  <a href="images/portfolio-img4.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img4.jpg" alt="portfolio img" /></a>
                </div>
                <div className="iso-box html photoshop col-lg-4 col-md-4 col-sm-6">
                  <a href="images/portfolio-img5.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img5.jpg" alt="portfolio img" /></a>
                </div>
                <div className="iso-box photoshop col-lg-4 col-md-4 col-sm-6">
                  <a href="images/portfolio-img6.jpg" data-lightbox-gallery="portfolio-gallery"><img src="images/portfolio-img6.jpg" alt="portfolio img" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
