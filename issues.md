# Netlify Deploy Issue

- in Netlify, we need to provide the `Build command` and `Publish Directory` values correctly
  - Go to `Build & Deploy` and under the `Build settings` section, click the `Configure` button
  - set the value for the `Build command` to be `npm run build`
  - set the value for the `Publish directory` to be `dist`

# Netlify Refresh or Links not working

- https://stackoverflow.com/questions/58065603/netlify-renders-404-on-page-refresh-using-react-and-react-router
- https://docs.netlify.com/routing/redirects/#basic-redirects

# Auth0 LinkedIn Social Connection Issue

- Generally follow the [Auth0 LinkedIn Integration Instructions](https://manage.auth0.com/dashboard/us/dev-zm8k7g0jntagspap/marketplace/integrations/linkedin-social-connection)
- But we could end up with this error explained [here](https://community.auth0.com/t/error-your-linkedin-network-will-be-back-soon-when-using-linkedin-social-connection/136532) while trying to loign

# Social Icons and Svg

see https://tw-elements.com/docs/standard/components/social-buttons/

# Using dynamic img src for img (Vite Specific)

```
<img :src="someVariable">
```

- Doesnt work with relative paths
- https://stackoverflow.com/questions/72718199/vue-3-require-is-not-defined-for-img-src
- Need to use https://vitejs.dev/guide/assets.html#importing-asset-as-url

# Netlify Image CDN

- if we need to provide URLs for images to be used elsewhere, such as in the Auth0 Universal Login widgets,
  - we can create an invisible <img> in one of our pages and then use https://developers.netlify.com/guides/how-to-serve-optimized-images-using-netlify-image-cdn/ to generate a url similar to this `https://meoh-dev.netlify.app/.netlify/images?url=/assets/auth0-logo-ds4biniu.png`

# Netlify DNS / Domain Management

- follow all the tutorials, but make sure to swtich the subdomain to be primary
  - apex domain: meoh.world
  - subdomain: www.meoh.world <<<< this one needs to be marked Primary in Netlify
- https://answers.netlify.com/t/redirecting-a-clients-website-that-is-done-on-wix-to-netlify/81291/5

- https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/
- https://answers.netlify.com/t/support-guide-how-do-i-transfer-my-domain-name-to-or-away-from-netlify/186

# Google Maps

- This Page Can't Load Google Maps Correctly
- The map is initialized without a valid Map ID

  - Create Map ID
    - https://console.cloud.google.com/google/maps-apis/studio/maps?hl=en&project=meoh-432023
    - https://developers.google.com/maps/documentation/get-map-id#create-a-map-id

- https://muffingroup.com/blog/this-page-cant-load-google-maps-correctly/
- https://churchthemes.com/page-didnt-load-google-maps-correctly/
