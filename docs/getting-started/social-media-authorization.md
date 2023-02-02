---
sidebar_position: 2
---

# Social Media Authorization

GenkiBox supports social media quests such as _Twitter Follow, Twitter Retweet, Discord Join Server, and so on_. In order to connect to the user's identity and verify the actions, the user authorization token is needed. We ask users to grant us permissions on top of [OAuth 2.0](https://oauth.net/2/) with [Twitter API](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api) and [Discord API](https://discord.com/developers/docs/intro).

## Authorization Link

Please add the authorization links below for Twitter and Discord in your website. The users will be redirected to the social media authorization page of GenkiBox and will grant us permission to verify their actions.

```javascript
<a href="https://box.genki.io/signin?target=[TARGET]&callbackUrl=[YOUR_SITE_URL]&campaignId=[YOUR_CAMPAIGN_ID]&address=[USER_ADDRESS]">Connect</a>
```

`target` can be _twitter_ or _discord_ depending on which social media quests you're running. If you run both Twitter quests and Discord quests, you will need 2 links. Please put the URL of your website in `callbackUrl` so the user will be guided back to your website after authorizing the permissions. In addition, `campaignId` and `address` are required to let us know which user is about to be connected with the account on which campaign.

## Authorization Status

The authorization status comes with user status, which you can retrieve from the [Get User Status](/api/get-user-status) API endpoint. Please go to the API document for more details.

## Example 1

In GenkiBox, we check the authorization status of the user first.

#### If the user does not log in any social media account.

<img
  src={require('../../static/img/social_media_not_logged_in.png').default}
  style={{maxWidth: "640px"}}
  alt="Not Logged In"
/>

#### After the user logs in both Twitter and Discord accounts.

<img
  src={require('../../static/img/social_media_logged_in.png').default}
  style={{maxWidth: "640px"}}
  alt="Logged In"
/>

## Example 2

In this example, we will add a Twitter authorization link and a Discord authorization link on Genki homepage (https://genki.io/).

After the user connects the wallet, we query the authorization with [Get User Status](/api/get-user-status). For each of Twitter and Discord, if the user has granted the permission, it shows the verify button. Otherwise, it shows the connect button. The workflow is described as follows.

```javascript
const QuestPanel = ({ campaignId, userAddress }) => {
  const [twitter, setTwitter] = useState();
  const [discord, setDiscord] = useState();

  useEffect(() => {
    if (userAddress) {
      fetch(`https://box.genki.io/api/v1/campaigns/${campaignId}/users/${userAddress}`)
        .then((response) => {
          return response.json();
        })
        .then((userStatus) => {
          setTwitter(userStatus.twitter);
          setDiscord(userStatus.discord);
        })
    }
  }, [userAddress]);

  return (
    <div>
      {twitter ? (
        <div>
          <p>Logged in as {twitter}</p>
          <a>Verify Twitter Action</a>
        </div>
      ) : (
        <div>
          <a href={`https://box.genki.io/signin?target=twitter&callbackUrl=https://genki.io/&campaignId=${campaignId}&address=${userAddress}`}>Connect to Twitter</a>
        </div>
      )}
      {discord ? (
        <div>
          <p>Logged in as {discord}</p>
          <a>Verify Discord Action</a>
        </div>
      ) : (
        <div>
          <a href={`https://box.genki.io/signin?target=discord&callbackUrl=https://genki.io/&campaignId=${campaignId}&address=${userAddress}`}>Connect to Discord</a>
        </div>
      )}
    </div>
  );
};
```

For the Twitter authorization, the user clicks at "Connect to Twitter", goes to the GenkiBox authorization page, logs in the Twitter account, and then goes back to the Genki homepage (https://genki.io/).
