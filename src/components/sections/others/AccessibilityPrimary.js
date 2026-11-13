import Link from "next/link";

const AccessibilityPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Accessibility Statement{" "}
									<span className="pill">HOA.Help</span>
								</h2>
								<p className="muted">
									MKZ Management LLC, doing business as HOA.Help. Last updated
									November 13, 2026.
								</p>
							</div>

							<div>
								<h3>Our commitment</h3>
								<p>
									HOA.Help is committed to making hoa.help usable by everyone,
									including people with disabilities. We aim to meet the Web
									Content Accessibility Guidelines (WCAG) 2.1, Level AA, which
									is the standard referenced by the U.S. Department of
									Justice for web accessibility under the ADA.
								</p>
							</div>

							<div>
								<h3>What we have done</h3>
								<ul>
									<li>
										A single, clear heading structure and a semantic page
										layout that screen readers can follow
									</li>
									<li>
										Alternative text on images and labeled links
									</li>
									<li>
										Keyboard-operable navigation, including the menu and the Log
										in dropdown
									</li>
									<li>
										Readable color contrast for text and buttons
									</li>
									<li>
										Responsive layouts that work with browser zoom and text
										resizing
									</li>
									<li>
										No content that flashes or auto-plays with sound
									</li>
								</ul>
							</div>

							<div>
								<h3>Known limitations</h3>
								<p>
									Some content is provided by third parties and is outside our
									direct control: the embedded Google Map on the Contact page,
									Calendly booking pages, the owner portal at app.hoa.help and
									the Buildium resident portal. If any of these blocks your
									use of our site, contact us and we will provide the same
									information directly.
								</p>
							</div>

							<div>
								<h3>Feedback</h3>
								<p>
									If you encounter a barrier on this site, please tell us:{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link> or
									call/text <Link href="tel:+18477730026">(847) 773-0026</Link>.
									We aim to respond within 5 business days and will work with
									you on an alternative way to get the information you need.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AccessibilityPrimary;
