export default function Navigation() {
    return (
        <section className="navbar navbar-fixed-top custom-navbar" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
        </button>
        <a href="#" className="navbar-brand">Digital Team</a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#home" className="smoothScroll">HOME</a></li>
          <li><a href="#work" className="smoothScroll">WORK</a></li>
          <li><a href="#about" className="smoothScroll">ABOUT</a></li>
          <li><a href="#team" className="smoothScroll">TEAM</a></li>
          <li><a href="#portfolio" className="smoothScroll">PORTFOLIO</a></li>
          <li><a href="#pricing" className="smoothScroll">PRICING</a></li>
          <li><a href="#contact" className="smoothScroll">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </section>
    )
}
