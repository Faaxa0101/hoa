"use client";
import Link from "next/link";

const ContactMenu = ({ isContactOpen, setIsContactOpen }) => {
	const handleClick = () => {
		setIsContactOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isContactOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`tj-offcanvas-area d-none d-lg-block  ${
					isContactOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo" onClick={handleClick}>
									<img
										src="/images/logos/hoa-help-logo-light.webp"
										alt="HOA.Help"
									/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<div className="offcanvas-text">
							<p>
								Simple, responsive management for self-managed HOAs and condo
								associations - with 24/7 live support and reserve-first
								budgeting. Always available. Forever financially secure.
							</p>
						</div>
						<div className="hamburger-infos">
							<p className="hamburger-title">Contact Info</p>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Call / Text</span>
									<Link className="contact-link" href="tel:+18477730026">
										(847) 773-0026
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:hello@hoa.help">
										hello@hoa.help
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Book</span>
									<Link
										className="contact-link"
										href="https://calendly.com/mike-mkzmanagement/30min"
										target="_blank"
									>
										Free 30-min call
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Office</span>
									<span className="contact-link">
										10700 W Higgins Rd, Suite 270, Rosemont, IL 60018
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<p className="hamburger-title">Quick Links</p>
						<div className="social-links style-3">
							<ul>
								<li>
									<Link
										href="https://app.hoa.help"
										target="_blank"
										title="Owner portal"
									>
										<i className="tji-home"></i>
									</Link>
								</li>
								<li>
									<Link
										href="https://calendly.com/mike-mkzmanagement/30min"
										target="_blank"
										title="Book a free 30-min call"
									>
										<i className="tji-calendar"></i>
									</Link>
								</li>
								<li>
									<Link
										href="https://g.page/r/CYdU1Z2O3AVaEBM/review"
										target="_blank"
										title="Leave a Google review"
									>
										<i className="tji-star"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMenu;
