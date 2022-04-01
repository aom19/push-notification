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

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: ".....",
  keys: {
    auth: ".....",
    p256dh: ".....",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
