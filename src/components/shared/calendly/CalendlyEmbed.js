"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CALENDLY_URL =
	"https://calendly.com/mike-mkzmanagement/30min?hide_gdpr_banner=1&primary_color=166f6f";

/**
 * Inline Calendly embed. Calendly's Free plan cannot redirect after a booking,
 * so we listen for the postMessage it emits on a confirmed booking and send
 * the visitor to /thank-you ourselves. /thank-you fires the GA4 call_booked event.
 */
const CalendlyEmbed = () => {
	const router = useRouter();

	useEffect(() => {
		const onMessage = (event) => {
			if (event.origin !== "https://calendly.com") return;
			if (!event.data || event.data.event !== "calendly.event_scheduled") return;

			router.push(
				"/thank-you?utm_source=calendly&utm_medium=referral&utm_campaign=call_booked"
			);
		};

		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	}, [router]);

	return (
		<>
			<div
				className="calendly-inline-widget book-calendly-widget"
				data-url={CALENDLY_URL}
			/>
			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				strategy="afterInteractive"
			/>
		</>
	);
};

export default CalendlyEmbed;
