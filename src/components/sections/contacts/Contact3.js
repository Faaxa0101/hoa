"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Contact3 = () => {
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form contact-direct wow fadeInUp" data-wow-delay=".1s">
							<h2 className="title">
								Talk to a real person - 24/7.
							</h2>
							<p className="contact-intro">
								No forms, no call centers. Call, text or email and a real
								person responds - usually within 24-48 hours, faster in an
								emergency.
							</p>
							<ul className="contact-direct-list">
								<li>
									<span className="icon"><i className="tji-phone-2"></i></span>
									<div className="body">
										<span className="label">Call / Text</span>
										<a href="tel:+18477730026">(847) 773-0026</a>
									</div>
								</li>
								<li>
									<span className="icon"><i className="tji-envelop-2"></i></span>
									<div className="body">
										<span className="label">Email</span>
										<a href="mailto:hello@hoa.help">hello@hoa.help</a>
									</div>
								</li>
								<li>
									<span className="icon"><i className="tji-location"></i></span>
									<div className="body">
										<span className="label">Office</span>
										<span>10700 W Higgins Rd, Suite 270, Rosemont, IL 60018</span>
									</div>
								</li>
								<li>
									<span className="icon"><i className="tji-clock"></i></span>
									<div className="body">
										<span className="label">Hours</span>
										<span>24/7 live support - a real person answers</span>
									</div>
								</li>
							</ul>
							<div className="contact-direct-btn">
								<ButtonPrimary
									text={"Book a Free 30-min Call"}
									url={"https://calendly.com/mike-mkzmanagement/30min"}
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe src="https://maps.google.com/maps?q=10700+W+Higgins+Rd+Suite+270+Rosemont+IL+60018&output=embed" title="HOA.Help office - Rosemont, IL"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
