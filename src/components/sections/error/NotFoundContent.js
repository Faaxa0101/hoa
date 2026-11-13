import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const quickLinks = [
	{ label: "Condo Management in Chicago", href: "/condo-management-chicago" },
	{
		label: "Association Management",
		href: "/association-management-chicago",
	},
	{ label: "HOA Accounting Services", href: "/services/hoa-accounting" },
	{ label: "Self-Managed HOA Support", href: "/services/self-managed-hoa-support" },
	{ label: "HOA Management Cost Guide", href: "/hoa-management-cost-chicago" },
	{ label: "About HOA.Help", href: "/about" },
	{ label: "Pricing", href: "/#pricing" },
	{ label: "Contact", href: "/contact" },
];

const NotFoundContent = () => {
	return (
		<section className="tj-error-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-9">
						<div className="tj-error-wrap text-center">
							<span className="error-code" aria-hidden="true">
								404
							</span>
							<h1 className="error-title">
								This page took a <span>different turn.</span>
							</h1>
							<p className="error-desc">
								The page you are looking for doesn't exist or has moved.
								Everything else is right where you left it - pick a shortcut
								below, or head back to the homepage.
							</p>
							<div className="error-actions">
								<ButtonPrimary text={"Back to homepage"} url={"/"} />
								<Link href="/contact" className="text-btn">
									<span className="btn-text">
										<span>Contact us</span>
									</span>
									<span className="btn-icon">
										<i className="tji-arrow-right-long"></i>
									</span>
								</Link>
							</div>

							<nav className="error-links" aria-label="Popular pages">
								<h2 className="error-links-title">Popular pages</h2>
								<ul>
									{quickLinks.map((link) => (
										<li key={link.href + link.label}>
											<Link href={link.href}>{link.label}</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFoundContent;
