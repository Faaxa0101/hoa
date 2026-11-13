const FeatureCard = ({ feature, type, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div
			className={`choose-box ${type === 2 ? "h6-choose-box" : ""} right-swipe`}
		>
			<div className="choose-content">
				<div className="choose-icon">
					<i className={icon}></i>
				</div>
				<h3 className="title">{title}</h3>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
