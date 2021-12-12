**Description**

This is an app called Hybrid Box where you can customise your TV streaming services. Create your own TV streaming package or choose customised packs. Now you can truly see what you pay for. No more filler channels that come attached to a package in which you have no control over.


**User Stories**

- 404: As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.

- Signup: As an anonymous user I can sign up on the platform so that I can create and customise my own TV stream package and get the best available deals. 

- Login: As a user I can login to the platform so that I can access my profile and start customising my TV package. 

- Logout: As a logged in user I can logout from the platform so that no one else can use my account. 

- Add channels to a custom package: As a logged in user I can add channels from the list of all the available channels to my package in order to make my own TV stream package.

- Edit channels: As a logged in user I can edit or change my TV package (adding, removing and updating).

- View created and customised TV stream package: As a logged in user I can see my customised TV package.

- View Channels:  This is a public view, as an anon user I can see the available channels for the customisation. 

- View TV deals: This is a public view, as an anon user I can see the pre-made customised TV deals. If I select a pre-made customised deal I am redirected to the sign-up page in order to complete my order.

- View Customised TV stream package prices: As a logged in user, I can see the final price for the package that I made.

- Add new channels/streaming platforms: As an Admin I can add new channels to the available channel list. 




**Models**

**User Model **

{ 
    name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: \["admin", "user"\], default: "user" },
  profileImage: { type: String, default: "https://i.imgur.com/yWHfhiG.png" },
  listOfChannels: [{ type: Schema.Types.ObjectId, ref:'Channel'} ],
  listOfStreams: [{ type: Schema.Types.ObjectId, ref:'Stream'} ]
    
}

**Channel Model **

{
  channelName: {type: String, required: true},
  channelImage: {type: String, default:'defaultImage.jpg'},
  genre: { type: String, required: true},
  channelWebsite: {type: String},
  platform: [ ],
  allowedCountries: [ ]
}

**Channel model genres:**

> Generalist,
> News,
> Government,
> Entertainment,
> Children,
> International,
> Sport,
> Music,
> Online Subscription,
> Movies,
> Culinary,
> Documentary
> Adult 



**Stream Platforms Model**

{
  streamName: {type: String, required: true},
  streamImage: {type: String, default:'defaultImage.jpg'},
  genre: { type: String, required: true},
  streamWebsite: {type: String},
  platform: [ ],
  allowedCountries: [ ]
}

Stream Platforms:

> Netflix
> Disney+
> AmazonPrime
> HBO Max
> Paramount+
> Tencent Video
> iQIYI
> Hulu
> Discovery +
> Crunchyroll
> Apple TV+
> Youtube Premium






 

