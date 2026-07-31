export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "G-YH36NN77RQ";

type GtagCommand =
  | "js"
  | "config"
  | "event"
  | "set"
  | "consent";

export interface GtagEventParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: GtagCommand,
      targetId: string | Date,
      params?: GtagEventParams | Record<string, unknown>,
    ) => void;
  }
}

export function initGtag(): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(command, targetId, params) {
    window.dataLayer.push(arguments as unknown as unknown[]);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    cookie_flags: "SameSite=None;Secure",
  });
}

export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackEvent(
  eventName: string,
  params: GtagEventParams = {},
): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
}
