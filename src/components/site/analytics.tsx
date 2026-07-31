import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initGtag, trackPageView } from "@/lib/analytics";

export function Analytics() {
  const { location } = useRouterState();

  useEffect(() => {
    initGtag();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname, location.search]);

  return null;
}
