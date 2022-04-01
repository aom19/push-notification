const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BHcJ6sw5Ay67VobEVIhlEVrfvHqDFMnyzOLG9Vz8d1CRCYBdyCzt9aoVYdZq1feEwll9gG67g15uYMe-ghN7cVU",
  privateKey: "2rzVVOrVnPfBnc9PR6hDRBFV8jqTGh0kYPAQAe4-Iaw",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;
  console.log(subscription);
  webpush.sendNotification(subscription, "Your Push Payload Text");
  // Send 201 - resource created
  // res.status(201).json({});

  // Create payload
  // const payload = JSON.stringify({ title: "Push Test" });

  // // Pass object into sendNotification
  // webpush
  //   .sendNotification(subscription, payload)
  //   .catch((err) => console.error(err));
});

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription =
  //  {
  //   endpoint:
  //     "https://fcm.googleapis.com/fcm/send/fZCK7jSs_Ds:APA91bGzzAaaWGuR81PbZSqQs8fQOd0ZTy1F8d93kR8uQfpvT8NltwRQhZRMOiLRAaYaXVIRZwngWS1jXjaH_1IqSSynacbOWf6jmklT2ULPeXNq1_SWbJAmWQdqWxJBeWt5F6lB_LfR",
  //   expirationTime: null,
  //   keys: {
  //     p256dh:
  //       "BLezMwVTGHcvqDzmoFfeWIrQoxFkRZz0YzK7e6YdnD7hXiyIgr-h98ktGOt83Pd1FaNpio7UDj5nJtWEoUwphEw",
  //     auth: "IluYNXLOyUI_mlcgQub3rg",
  //   },
  //   // Mihai S Chrome
  // };

  // {
  //   endpoint:
  //     "https://wns2-db5p.notify.windows.com/w/?token=BgYAAABfEzMKPFY3yuwIkz3eLSjkA%2f%2f4AjEqkkPOMbS8Yh0svoRYOfIM6ESxwM6aSmMAzlrSzlQ7NaPgwQUR89vK6FWHIWsN%2fUcN8efBgu5t2rcF44oKafItEC%2fS1gcaKp%2b%2b3BQNr7JnqwQNM4BvROZKAPv%2fdbY9VNnxBZrfIJY8bHev%2bm0UBNkCvRPfmWsuX8ZGMNsQTKggqrjhnvG2MO5RFUF3U3CRdkK%2fR4S1CMBUWp1dXuBaGoAlBS86UIRUGnPKJQLvejeptOI6UUHNJVMSKINEhHD2ZrreIlpifGOJJFb6tpvwOSdJtYTP4yM8c0eyM0wjQY8lL1lIUJmgSvyjCcwO29DyPpWSmTjzI08jONUXbA%3d%3d",
  //   expirationTime: null,
  //   keys: {
  //     p256dh:
  //       "BL94uX0qWNs7XkS91EzfUgHKArGq_SeXlFGhCME9TvhnvJNW8ez2f-YD9D-fJs30CpMpFPelR3yJw5mFASIeo5Y",
  //     auth: "ttjNAdDx-QhQbZyFozLuxw",
  //   },
  // };

  //mozila
  // {
  //   endpoint:
  //     "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABiR…jeidhi6MBeOWdskcErq4yxnr0CkupdP4EHVeBN1E89pH5B2uFaI_UM6ol7hE",
  //   expirationTime: null,
  //   keys: {
  //     auth: "clyX7rE27OpXOv9yY20wow",
  //     p256dh:
  //       "BCqJV6aOaV_9l2dASbLnkd-21lP-S_RWy4QW0zrQXVAE61FXfXkArMUp1rcQxq50X00wSCF2yz-DKqf6nOXPhHI",
  //   },
  // };

  //chrome
  //  {
  //   endpoint:
  //     "https://fcm.googleapis.com/fcm/send/cDMH-sAmG3w:APA91bHLYijxBrhie4dgVXPsp-Y5B_Xg-EE6On0mBddBioe4lONFQe_M0bCYvNvJWUWDfkfXGLH3z3SQSCF9ZPmKiIqVG9qff_ZsOsXhZMKlDX8f0sUfCdc8eNCSaPfXAu4ali_WMj6x",
  //   expirationTime: null,
  //   keys: {
  //     p256dh:
  //       "BB_RzJ3lvhtEMytE4Zm396ByWlI9pphO5QSPwGWUxsCDJE4dI1v59AowZ1XYyxM8H0CzBeG79Lhg3T0jrgw3ZM8",
  //     auth: "U7zL5HL9B8eiMVChk0GM5g",
  //   },
  // };

  webpush.sendNotification(pushSubscription, "Your Push Payload Text");
