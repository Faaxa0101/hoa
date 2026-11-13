import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ScrollLink from "@/components/shared/others/ScrollLink";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="tj-banner-section section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<span className="sub-title wow fadeInDown" data-wow-delay=".2s">
							<i className="tji-home"></i> HOA &amp; Condo Management · Illinois
						</span>
						<h1 className="banner-title title-anim">
							Make Your HOA &amp; Condo Assessments Predictable, <span>Not Special.</span>
						</h1>
						<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
							<div className="banner-desc">
								Simple, responsive management for self-managed HOAs and condo
								associations, with 24/7 live support and reserve-first
								budgeting.
							</div>
						</div>
						<div className="banner-btn-group wow fadeInUp" data-wow-delay=".8s">
							<ButtonPrimary
								text={"Book a Free 30-min Call"}
								url={"https://calendly.com/mike-mkzmanagement/30min"}
							/>
							<ScrollLink
								href="#how"
								className={"text-btn banner-secondary-link"}
							>
								<span className="btn-text">
									<span>See the 2-week onboarding</span>
								</span>
							</ScrollLink>
						</div>
					</div>
					<div className="banner-shape">
						<img src="/images/shape/pattern-bg.webp" alt="" />
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							data-speed="0.8"
							src="/images/hero/hoa-hero-il-expert.webp"
							alt="Chicago skyline - HOA and condo management in Illinois by HOA.Help"
							width={945}
							height={793}
							priority
						/>
					</div>
					<div className="box-area">
						<div className="customers-box">
							<div className="customers">
								<ul>
									<li className="wow fadeInLeft" data-wow-delay=".5s">
										<span>
											<i className="tji-phone"></i>
										</span>
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".6s">
										<span>
											<i className="tji-chat"></i>
										</span>
									</li>
								</ul>
							</div>
							<div
								className="customers-number wow fadeInUp"
								data-wow-delay=".5s"
							>
								24/7
							</div>
							<p className="customers-text wow fadeInUp" data-wow-delay=".5s">
								Live support. Call, text, or email - a real person responds and
								drives resolution within 24-48 hours.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
