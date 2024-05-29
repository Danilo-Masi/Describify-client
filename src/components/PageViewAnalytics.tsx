import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import posthog from "posthog-js";

export default function PageViewAnalytics() {

    const location = useLocation();
    useEffect(() => {
        posthog.capture('$pageview');
    }, [location]);

    return null;
}
