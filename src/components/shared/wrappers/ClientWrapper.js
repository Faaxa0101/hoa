"use client";
import onePageNavAnim from "@/libs/onePageNavAnim";
import smoothScrollToTop from "@/libs/smoothScrollToTop";
import { useGSAP } from "@/libs/gsap.config";
import { useEffect } from "react";

/**
 * Animations disabled: content renders immediately (no WOW reveal,
 * no GSAP intro/split-text/parallax). Only what navigation needs is kept:
 * - smoothScrollToTop: hash links scroll natively
 * - onePageNavAnim: TOC buttons (e.g. privacy page) still scroll to targets
 */
const ClientWrapper = () => {
	useEffect(() => {
		smoothScrollToTop();
	}, []);
	useGSAP((context, contextSafe) => {
		onePageNavAnim(contextSafe);
	});
	return null;
};

export default ClientWrapper;
