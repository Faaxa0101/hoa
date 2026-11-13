import Link from "next/link";

const PrivacyPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Privacy Policy <span className="pill">HOA.Help</span>
								</h2>
								<p className="muted">Last updated: November 2, 2026</p>
								<p>
									MKZ Management LLC, doing business as HOA.Help (“HOA.Help”,
									“we”).
								</p>
							</div>

							<nav className="toc" aria-label="Table of contents">
								<h2>Table of Contents</h2>
								<ol>
									<li>
										<button className="tj-scroll-btn" data-target="#texts">
											Text messages and the HOA.Help phone line
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#opt-in">
											How you opt in
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#opt-out">
											How you opt out
										</button>
									</li>
									<li>
										<button
											className="tj-scroll-btn"
											data-target="#no-sharing"
										>
											No sharing for marketing
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#collect">
											What we collect
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#use-store">
											How we use and store it
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#rights">
											Your rights
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#contact">
											Contact
										</button>
									</li>
								</ol>
							</nav>

							<div id="texts">
								<h3>1. Text messages and the HOA.Help phone line</h3>
								<p>
									The HOA.Help phone number,{" "}
									<Link href="tel:+18477730026">(847) 773-0026</Link>, is used
									to send and receive text messages and calls with owners,
									tenants, board members and vendors of the associations and
									rental properties we manage.
								</p>
								<p>
									Messages are about your account and your building only:
									confirmations and updates on maintenance requests, assessment
									and rent payment reminders and receipts, building notices
									(water shut-offs, inspections, meetings), vendor appointment
									confirmations, replies to questions you send us, and
									emergencies. We do not send marketing or promotional texts.
								</p>
							</div>

							<div id="opt-in">
								<h3>2. How you opt in</h3>
								<p>
									You opt in by texting or calling the HOA.Help number, by
									providing your mobile number on your owner or tenant contact
									form, or by turning on “Text me updates” in your HOA.Help
									portal account at app.hoa.help. By opting in you agree to
									receive the messages described above. Message frequency varies
									(typically a few messages per month, more during an active
									request or an emergency). Message and data rates may apply.
								</p>
							</div>

							<div id="opt-out">
								<h3>3. How you opt out</h3>
								<p>
									Reply STOP at any time to stop receiving texts; you will
									receive one confirmation message and nothing more. Reply HELP
									for help, or email{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link>.
									Opting out of texts does not affect notices we are required
									to send by mail or email.
								</p>
							</div>

							<div id="no-sharing">
								<h3>4. No sharing for marketing</h3>
								<p>
									No mobile information will be shared with third parties or
									affiliates for marketing or promotional purposes. Text
									messaging originator opt-in data and consent will not be
									shared with any third parties. We use Twilio, Inc. only as
									the carrier that delivers messages and calls.
								</p>
							</div>

							<div id="collect">
								<h3>5. What we collect</h3>
								<p>
									Your name, email address, phone number, your unit and
									association or lease, the content of texts, emails,
									voicemails and requests you send us, call times, and the
									payment and ledger records of your account. Calls to the line
									may be recorded for voicemail and quality purposes; you are
									told when a recording starts. Payments are processed by
									Stripe; we do not store your full card or bank account
									number.
								</p>
							</div>

							<div id="use-store">
								<h3>6. How we use and store it</h3>
								<p>
									Your information is stored in our management system
									(HOA.Help, built on Odoo) attached to your unit so your
									manager can act on it and keep the records the association is
									required to keep. It is seen only by HOA.Help staff and,
									where it concerns the association, its board. We keep records
									for as long as the association&apos;s governing documents and
									the law require.
								</p>
							</div>

							<div id="rights">
								<h3>7. Your rights</h3>
								<p>
									You can ask what we hold about you, ask us to correct it, or
									ask us to delete it where the association&apos;s records
									allow, by emailing{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link>.
								</p>
							</div>

							<div id="state-rights">
								<h3>8. Your US state privacy rights (CCPA/CPRA and similar laws)</h3>
								<p>
									If you live in California, Colorado, Connecticut, Virginia,
									Utah or another state with a comprehensive privacy law, you
									may have additional rights. We describe them here in plain
									language.
								</p>
								<p>
									<strong>Categories we collect:</strong> identifiers (name,
									email, phone), association and unit information, commercial
									information (ledger, assessment and payment records where
									you are an owner or tenant), internet activity limited to
									your interactions with us (emails, texts, portal requests),
									and communications content. Sources are you, your board or
									manager, and the vendors that operate our systems (for
									example Twilio and Stripe).
								</p>
								<p>
									<strong>No sale or sharing:</strong> we do not sell personal
									information and do not share it for cross-context behavioral
									advertising. We do not use or disclose sensitive personal
									information beyond the purposes described in this policy.
								</p>
								<p>
									<strong>Your rights:</strong> to know what we hold and
									request a copy, to delete it where the association's records
									allow, to correct it, and to not be discriminated against
									for exercising these rights. To exercise a right, email{" "}
									<Link href="mailto:hello@hoa.help">hello@hoa.help</Link>{" "}
									with the subject &quot;Privacy Request&quot;. We will verify
									your identity (typically by replying from the email or
									number we hold for you) and respond within the time required
									by law.
								</p>
								<p>
									Full CCPA statement: see{" "}
									<Link href="/do-not-sell">Do Not Sell or Share My Personal Information</Link>.
								</p>
							</div>

							<div id="cookies">
								<h3>9. Cookies and similar technologies</h3>
								<p>
									What this site stores and embeds is described in our{" "}
									<Link href="/cookies">Cookie Policy</Link>.
								</p>
							</div>

							<div id="children">
								<h3>10. Children's privacy</h3>
								<p>
									Our services are directed to adults - owners, tenants, board
									members and vendors. We do not knowingly collect personal
									information from children under 13. If you believe a child
									has provided information to us, contact us and we will delete
									it.
								</p>
							</div>

							<div id="changes">
								<h3>11. Changes to this policy</h3>
								<p>
									We may update this policy; the &quot;Last updated&quot; date
									above reflects the current version.
								</p>
							</div>

							<div id="contact">
								<h3>12. Contact</h3>
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

export default PrivacyPrimary;
