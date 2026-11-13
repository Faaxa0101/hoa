import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
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
						<MobileNavbar />
						<div className="hamburger-infos">
						<p className="hamburger-title">Log in</p>
						<div className="contact-info">
							<div className="contact-item">
								<Link className="contact-link" href="https://app.hoa.help/web/login?redirect=/my/hoa" target="_blank" rel="noopener noreferrer">Owners &amp; Boards</Link>
							</div>
							<div className="contact-item">
								<Link className="contact-link" href="https://app.hoa.help/web/login?redirect=/odoo" target="_blank" rel="noopener noreferrer">Managers</Link>
							</div>
							<div className="contact-item">
								<Link className="contact-link" href="https://app.hoa.help/web/login?redirect=/odoo/crm" target="_blank" rel="noopener noreferrer">Sales Reps</Link>
							</div>
							<div className="contact-item">
								<Link className="contact-link" href="https://www.managebuilding.com/Resident/portal/login" target="_blank" rel="noopener noreferrer">Current residents (Buildium)</Link>
							</div>
						</div>
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
									<span className="subtitle">Office</span>
									<span className="contact-link">
										10700 W Higgins Rd, Suite 270, Rosemont, IL 60018
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<p className="hamburger-title">Talk to Us</p>
						<div className="social-links style-3">
							<ul>
								<li>
									<Link
										href="https://calendly.com/mike-mkzmanagement/30min"
										target="_blank"
									>
										<i className="tji-calendar"></i>
									</Link>
								</li>
								<li>
									<Link href="https://app.hoa.help" target="_blank">
										<i className="tji-home"></i>
									</Link>
								</li>
								<li>
									<Link
										href="https://g.page/r/CYdU1Z2O3AVaEBM/review"
										target="_blank"
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

export default MobileMenu;
