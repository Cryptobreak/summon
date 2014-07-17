# Summon

Summon is a pretty obscure project. You've probably never heard of it.

# Setup

1. Run `npm install`.
2. Create a file in `server/config/local.env.js` that looks something like:

```javascript
'use strict';

module.exports = {
  SESSION_SECRET: "YOURSECRET",
  FACEBOOK_ID: "YOURFACEBOOKID",
  FACEBOOK_SECRET: "YOURFACEBOOKSECRET",
  TWITTER_ID: "YOURTWITTERID",
  TWITTER_SECRET: "YOURTWITTERSECRET",
  GOOGLE_ID: "YOURGOOGLEID",
  GOOGLE_SECRET: "YOURGOOGLESECRET",
  SUMMON_MONGO: "mongodb://MONGOUSERNAME:MONGOPASSWORD@MONGOHOST.mongolab.com:53139/summon"
};
```

