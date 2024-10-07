export const gtmPageView = (rest: object) => {
    window.dataLayer?.push({
      event: "page_view",
      url: window.location.href,
      ...rest,
    });
  };