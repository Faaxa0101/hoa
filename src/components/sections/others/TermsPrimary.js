import Link from "next/link";

const TermsPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Terms and Conditions{" "}
									<span className="pill">HOA.Help</span>
								</h2>
								<p className="muted">
									MKZ Management LLC, doing business as HOA.Help (&quot;HOA.Help&quot;,
									&quot;we&quot;). Last updated November 9, 2026.
								</p>
							</div>

							<div id="agreement">
								<h3>1. Agreement to these terms</h3>
								<p>
									These Terms and Conditions govern your use of hoa.help and,
									where applicable, the management services provided by MKZ
									Management LLC, doing business as HOA.Help. By using this
									website you agree to these terms. Management services are
									also governed by the written management agreement signed by
									the association.
								</p>
							</div>

							<div id="services">
								<h3>2. Services</h3>
								<p>
									HOA.Help provides condominium and HOA management services in
									Illinois, including assessment collections, financial
									reporting, owner portals, vendor coordination and 24/7 live
									support. The scope for any association is defined in its
									written management agreement. Nothing on this website is
									legal, tax or accounting advice for any board or owner.
								</p>
							</div>

							<div id="use">
								<h3>3. Website use</h3>
								<p>
									You agree to use this website lawfully and not to attempt to
									interfere with its operation, access non-public systems
									without authorization, scrape it at scale, or use it to
									transmit unlawful, harmful or misleading content.
								</p>
							</div>

							<div id="ip">
								<h3>4. Intellectual property</h3>
								<p>
									The content, design and branding of hoa.help are owned by
									MKZ Management LLC or used under license and may not be
									copied or redistributed without permission.
								</p>
							</div>

							<div id="thirdparty">
								<h3>5. Third-party links and services</h3>
								<p>
									This site links to third-party services (booking, the owner
									portal, the resident portal, maps and review pages). Those
									services are governed by their own terms and privacy
									policies; we are not responsible for their content or
									practices.
								</p>
							</div>

							<div id="disclaimer">
								<h3>6. Disclaimers</h3>
								<p>
									This website is provided &quot;as is&quot; without warranties
									of any kind. Financial and reserve figures shown anywhere on
									the site are illustrative; actual reporting for any
									association comes from the association's records and written
									reports.
								</p>
							</div>

							<div id="liability">
								<h3>7. Limitation of liability</h3>
								<p>
									To the maximum extent permitted by Illinois law, MKZ
									Management LLC is not liable for indirect, incidental or
									consequential damages arising from use of this website.
									Nothing in these terms limits liability that cannot be
									limited by law.
								</p>
							</div>

							<div id="law">
								<h3>8. Governing law</h3>
								<p>
									These terms are governed by the laws of the State of
									Illinois. Venue for any dispute lies in the state or federal
									courts located in Cook County, Illinois.
								</p>
							</div>

							<div id="changes">
								<h3>9. Changes</h3>
								<p>
									We may update these terms; the &quot;Last updated&quot; date
									above reflects the current version. Continued use of the
									site after changes means you accept them.
								</p>
							</div>

							<div id="program">
								<h3>10. HOA.Help Account and Building Texts</h3>
								<p>
									<strong>Program name:</strong> HOA.Help Account and Building
									Texts, sent from (847) 773-0026 by MKZ Management LLC, doing
									business as HOA.Help.
								</p>
								<p>
									<strong>What we send:</strong> account and service messages to
									owners, tenants and board members of the condominium
									associations and rental properties we manage: confirmations
									and status updates on maintenance requests, reminders of
									assessment or rent payments that are due and payment
									receipts, building notices (water shut-offs, inspections,
									meeting dates), vendor appointment confirmations, and replies
									to questions you text to our line. We do not send marketing
									or promotional texts.
								</p>
								<p>
									<strong>How you opt in:</strong> by checking the text-message
									consent box on your HOA.Help contact form or by turning on
									&quot;Text me updates&quot; in your HOA.Help portal account.
									If you text our number first, we reply only about that
									message or request.
								</p>
							</div>

							<div id="frequency">
								<h3>Message frequency and costs</h3>
								<p>
									Message frequency varies, typically a few messages per month,
									more during an open request or a building emergency. Message
									and data rates may apply. Check with your mobile carrier for
									details of your plan.
								</p>
							</div>

							<div id="optout">
								<h3>Help and opting out</h3>
								<p>
									Reply HELP for help. You can also reach us at{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link> or{" "}
									<Link href="tel:+18477730026">(847) 773-0026</Link>. Reply
									STOP to opt out at any time. You will receive one message
									confirming you are unsubscribed and no further texts. Reply
									START to opt back in. Opting out of texts does not affect
									notices we are required to send by mail or email.
								</p>
							</div>

							<div id="carriers">
								<h3>Carriers</h3>
								<p>
									Mobile carriers are not liable for delayed or undelivered
									messages. Delivery depends on your carrier and coverage.
								</p>
							</div>

							<div id="privacy">
								<h3>Privacy</h3>
								<p>
									How we collect, use and protect your information, including
									that we do not sell or share your SMS opt-in data or personal
									information with third parties for marketing purposes, is
									described in our{" "}
									<Link href="/privacy">Privacy Policy</Link>.
								</p>
							</div>

							<div id="contact">
								<h3>11. Contact</h3>
								<p>
									MKZ Management LLC · 10700 W Higgins Rd, Suite 270,
									Rosemont, IL 60018 ·{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link> ·{" "}
									<Link href="tel:+18477730026">(847) 773-0026</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TermsPrimary;
