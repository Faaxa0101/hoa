import Link from "next/link";

const DoNotSellPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Do Not Sell or Share My Personal Information{" "}
									<span className="pill">HOA.Help</span>
								</h2>
								<p className="muted">
									MKZ Management LLC, doing business as HOA.Help. Last updated
									November 13, 2026.
								</p>
							</div>

							<div>
								<h3>Our statement</h3>
								<p>
									HOA.Help does <strong>not</strong> sell personal information.
									We also do not share personal information for cross-context
									behavioral advertising, as those terms are defined by the
									California Consumer Privacy Act (CCPA), as amended by the
									CPRA, and by similar state privacy laws.
								</p>
								<p>
									This includes mobile phone numbers and SMS opt-in data:
									text-messaging originator opt-in data and consent are never
									shared with third parties for marketing or promotional
									purposes.
								</p>
							</div>

							<div>
								<h3>Your other privacy rights</h3>
								<p>
									Depending on your state of residence, you may have the right
									to know what personal information we hold, to request a
									copy, to correct it, or to delete it where the association's
									records allow. You also have the right not to be
									discriminated against for exercising these rights. How to
									exercise them is described in our{" "}
									<Link href="/privacy">Privacy Policy</Link>.
								</p>
							</div>

							<div>
								<h3>How to contact us</h3>
								<p>
									Email <Link href="mailto:hello@hoa.help">hello@hoa.help</Link>{" "}
									with the subject line &quot;Privacy Request&quot;, or call{" "}
									<Link href="tel:+18477730026">(847) 773-0026</Link>. We will
									verify your request and respond within the timeframe required
									by applicable law.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DoNotSellPrimary;
