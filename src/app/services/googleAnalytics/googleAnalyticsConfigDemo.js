const prodConfig = {
    gaTrackingID: 'YOUR_ID'
};

const devConfig = {
    gaTrackingID: 'YOUR_ID'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;