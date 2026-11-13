import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FooterGroups from "@/components/layout/footer/FooterGroups";
import Link from "next/link";

const groups = [
	{
		title: "Services",
		links: [
			{ label: "Condo Management in Chicago", href: "/condo-management-chicago" },
			{
				label: "Association Management in Chicago",
				href: "/association-management-chicago",
			},
			{ label: "HOA Accounting Services", href: "/services/hoa-accounting" },
			{
				label: "Self-Managed HOA Support",
				href: "/services/self-managed-hoa-support",
			},
		],
	},
	{
		title: "Areas",
		links: [
			{ label: "Chicago", href: "/condo-management-chicago" },
			{ label: "Evanston", href: "/hoa-management-evanston" },
			{ label: "Skokie", href: "/hoa-management-skokie" },
			{ label: "Schaumburg", href: "/hoa-management-schaumburg" },
			{
				label: "Arlington Heights",
				href: "/hoa-management-arlington-heights",
			},
			{ label: "Palatine", href: "/hoa-management-palatine" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About HOA.Help", href: "/about" },
			{ label: "How it works", href: "/#how" },
			{ label: "Pricing", href: "/#pricing" },
			{ label: "HOA Management Cost in Chicago", href: "/hoa-management-cost-chicago" },
			{ label: "Contact", href: "/contact" },
			{ label: "FAQ", href: "/#faq" },
			{ label: "Privacy Policy", href: "/privacy" },
			{ label: "Terms & Conditions", href: "/terms" },
			{ label: "Accessibility", href: "/accessibility" },
		],
	},
];

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row row-gap-4">
						{/* Brand + NAP + review */}
						<div className="col-xl-4 col-lg-5 col-md-7">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/hoa-help-logo.png" alt="HOA.Help" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Simple, responsive management for self-managed HOAs and
										condo associations. Always available. Forever financially
										secure.
									</p>
								</div>
								<ul className="footer-nap">
									<li>
										<span className="icon">
											<i className="tji-location"></i>
										</span>
										<span>
											10700 W Higgins Rd, Suite 270, Rosemont, IL 60018
										</span>
									</li>
									<li>
										<span className="icon">
											<i className="tji-phone-2"></i>
										</span>
										<Link href="tel:+18477730026">(847) 773-0026</Link>
									</li>
									<li>
										<span className="icon">
											<i className="tji-envelop-2"></i>
										</span>
										<Link href="mailto:hello@hoa.help">hello@hoa.help</Link>
									</li>
									<li>
										<span className="icon">
											<i className="tji-clock"></i>
										</span>
										<span>24/7 live support - a real person answers</span>
									</li>
								</ul>
								<div className="footer-review">
									<Link
										href="https://g.page/r/CYdU1Z2O3AVaEBM/review"
										target="_blank"
										rel="noopener noreferrer"
										className="footer-review-link"
									>
										<span className="stars">
											<i className="tji-star"></i>
											<i className="tji-star"></i>
											<i className="tji-star"></i>
											<i className="tji-star"></i>
											<i className="tji-star"></i>
										</span>
										Leave a Google review
									</Link>
									<Link
										href="https://app.hoa.help"
										target="_blank"
										rel="noopener noreferrer"
										className="footer-portal-link"
									>
										Owner portal log in
									</Link>
								</div>
							</div>
						</div>

						{/* Link groups */}
						<div className="col-xl-3 col-lg-2 col-md-5 footer-groups-col">
							<FooterGroups groups={[groups[0]]} />
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 footer-groups-col">
							<FooterGroups groups={[groups[1]]} />
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 footer-groups-col">
							<FooterGroups groups={[groups[2]]} />
						</div>
					</div>

					{/* CTA strip */}
					<div className="row">
						<div className="col-12">
							<div className="footer-cta-strip wow fadeInUp" data-wow-delay=".3s">
								<div className="footer-cta-copy">
									<h3 className="title">Talk to a real person, 24/7.</h3>
									<p>No forms, no call centers - call, text or book a free 30-min call.</p>
								</div>
								<div className="footer-cta-actions">
									<ButtonPrimary
										text={"Book a Free Call"}
										url={"https://calendly.com/mike-mkzmanagement/30min"}
									/>
									<Link href="tel:+18477730026" className="footer-cta-phone">
										<i className="tji-phone-2"></i> (847) 773-0026
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; {new Date().getFullYear()} MKZ Management LLC,
										doing business as HOA.Help. All rights reserved.
									</p>
								</div>
								<div className="copyright-links">
									<Link href="/privacy">Privacy</Link>
									<span className="sep">·</span>
									<Link href="/terms">Terms</Link>
									<span className="sep">·</span>
									<Link href="/cookies">Cookies</Link>
									<span className="sep">·</span>
									<Link href="/do-not-sell">Do Not Sell</Link>
									<span className="sep">·</span>
									<Link href="/accessibility">Accessibility</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer;
