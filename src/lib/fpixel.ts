export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "1095654516757501";

declare global {
  interface Window {
    fbq: {
      (action: "init", pixelId: string, options?: Record<string, any>): void;
      (action: "track", eventName: string, parameters?: Record<string, any>): void;
      (action: "trackCustom", eventName: string, parameters?: Record<string, any>): void;
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      loaded?: boolean;
      version?: string;
    };
    _fbq?: any;
  }
}

/**
 * Trigger standard PageView event.
 * https://developers.facebook.com/docs/facebook-pixel/reference
 */
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/**
 * Trigger Facebook standard event.
 * Examples: 'Lead', 'Contact', 'ViewContent', 'InitiateCheckout', 'Schedule', etc.
 * https://developers.facebook.com/docs/facebook-pixel/reference
 */
export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};

/**
 * Trigger Facebook custom event.
 */
export const customEvent = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, options);
  }
};
