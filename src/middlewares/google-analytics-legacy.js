const googleAnalyticsLegacy = ({
  trackingId,
}) => ({
  componentDidMount: () => {
    if (document) {
      const elem = document.createElement('script')
      elem.type = 'text/javascript'
      elem.innerHTML =
      `
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', '${trackingId}']);
        _gaq.push(['_trackPageview']);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
      `
      document.head.appendChild(elem)
    }
  },
  gaPush: (...args) => {
    window._gaq.push(...args)
  },
})

export { googleAnalyticsLegacy }
export default googleAnalyticsLegacy