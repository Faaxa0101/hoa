import Link from "next/link";

const CookiesPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Cookie Policy <span className="pill">HOA.Help</span>
								</h2>
								<p className="muted">
									MKZ Management LLC, doing business as HOA.Help. Last updated
									November 13, 2026.
								</p>
								<p>
									This policy explains how hoa.help uses cookies and similar
									technologies (local storage), and how you can control them.
								</p>
							</div>

							<div>
								<h3>1. What we use</h3>
								<ul>
									<li>
										<strong>Strictly necessary / functional storage:</strong>{" "}
										browser local storage may remember display preferences
										(such as a light or dark theme). This is not transmitted to
										us and cannot identify you.
									</li>
									<li>
										<strong>Embedded content:</strong> our Contact page embeds a
										Google Map. When it loads, Google may set cookies and
										collect data under its own policies. The map does not load
										any personal information from you until it renders in your
										browser.
									</li>
									<li>
										<strong>External links:</strong> booking (Calendly), the
										owner portal (app.hoa.help) and payment or review links open
										third-party sites, which apply their own cookie and privacy
										policies.
									</li>
								</ul>
							</div>

							<div>
								<h3>2. What we do not use</h3>
								<p>
									We do not use advertising cookies, cross-site tracking
									pixels, or third-party analytics cookies on hoa.help. We do
									not sell cookie data.
								</p>
							</div>

							<div>
								<h3>3. Controlling cookies</h3>
								<p>
									You can block or delete cookies and local storage in your
									browser settings at any time. Blocking the Google Map embed
									may affect the map on our Contact page; the rest of the site
									works normally. Browser controls for blocking cookies are
									documented by each browser vendor (Chrome, Safari, Firefox,
									Edge).
								</p>
							</div>

							<div>
								<h3>4. More information</h3>
								<p>
									How we handle personal information is described in our{" "}
									<Link href="/privacy">Privacy Policy</Link>. Questions:{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link> or
									(847) 773-0026.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CookiesPrimary;
