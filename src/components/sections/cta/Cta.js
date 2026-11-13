import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area">
							<div className="cta-content">
								<h2 className="title title-anim">
									Share your issues &amp; questions. Leave with a path to the
									“Promised Land.”
								</h2>
								<div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={"Book a Free 30-min Call"}
										url={"https://calendly.com/mike-mkzmanagement/30min"}
										className={"btn-dark"}
									/>
								</div>
							</div>
							<div className="cta-img">
								<img
									src="/images/cta/hoa-chicago.webp"
									alt="Chicago skyline - HOA.Help home base in Illinois"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
