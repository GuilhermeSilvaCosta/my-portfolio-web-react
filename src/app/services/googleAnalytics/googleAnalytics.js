import ReactGA from 'react-ga';
import config from './googleAnalyticsConfig';

class googleAnalytics {

    constructor() {
        ReactGA.initialize(config.gaTrackingID)
    }

    pageview (url, trackers = [], title) {
        ReactGA.pageview(url, trackers, title);
    }
}

const instance = new googleAnalytics();

export default instance;