"use client";

import { useEffect } from "react";

/**
 * Fires the GA4 conversion event when the Calendly post-booking redirect
 * lands on /thank-you. Mark `call_booked` as a key event in GA4:
 * Admin -> Events -> Mark as key event.
 */
const BookedEvent = () => {
	useEffect(() => {
		if (typeof window.gtag === "function") {
			window.gtag("event", "call_booked", {
				event_category: "conversion",
				event_label: "Calendly booking confirmed",
			});
		}
	}, []);

	return null;
};

export default BookedEvent;
