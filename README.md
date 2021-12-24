<h1>Description</h1>
This is an app called Hybrid Box where you can customise your TV streaming services. Create your own TV streaming package or choose customised packs. Now you can truly see what you pay for. No more filler channels that come attached to a package in which you have no control over.

<br><br/>
Live Demo: <h4><a href="https://hybridbox.netlify.app/" target=_blank>Here</a></h4>
<br><br/>


| User Stories                                                                                                                                                                                                |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Signup: As an anonymous user I can sign up on the platform so that I can create and customise my own TV stream package and get the best available deals.                                                    |
| Login: As a user I can login to the platform so that I can access my profile and start customising my TV package.                                                                                           |
| Logout: As a logged in user I can logout from the platform so that no one else can use my account.                                                                                                          |
| Add channels to a custom package: As a logged in user I can add channels from the list of all the available channels to my package in order to make my own TV stream package.                               |
| Edit channels: As a logged in user I can edit or change my TV package (adding, removing and updating).                                                                                                      |
| View created and customised TV stream package: As a logged in user I can see my customised TV package.                                                                                                      |
| View Channels: This is a public view, as an anon user I can see the available channels for the customisation.                                                                                               |
| View TV deals: This is a public view, as an anon user I can see the pre-made customised TV deals. If I select a pre-made customised deal I am redirected to the sign-up page in order to complete my order. |
| View Customised TV stream package prices: As a logged in user, I can see the final price for the package that I made.                                                                                       |
| Add new channels/streaming platforms: As an Admin I can add new channels to the available channel list.                                                                                                     |
| 404: As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.                                                                   |

<h2>Models</h2>

<h4>User Model</h4>

<ul>

<li>name: { type: String, required: true },</li>
<li>email: { type: String, unique: true, required: true },</li>
<li>password: { type: String, required: true },</li>
<li>role: { type: String, enum: \["admin", "user"\], default: "user" },</li>
<li>profileImage: { type: String, default: "https://i.imgur.com/yWHfhiG.png" },</li>
<li>listOfChannels: [{ type: Schema.Types.ObjectId, ref:'Channel'} ],</li>
<li>listOfStreams: [{ type: Schema.Types.ObjectId, ref:'Stream'} ]</li>


</ul>

<h4>Channel Model </h4>

<ul>
<li>channelName: {type: String, required: true},</li>
<li>channelImage: {type: String, default:'defaultImage.jpg'},</li>
<li>genre: { type: String, required: true},</li>
<li>channelWebsite: {type: String},</li>
<li>platform: [ ],</li>
<li>allowedCountries: [ ]</li>
</ul>

<h5>Channel model genres</h5>

<ul>
<li>Generalist</li>
<li>News</li>
<li>Government</li>
<li>Entertainment</li>
<li>Children</li>
<li>International</li>
<li>Sport</li>
<li>Music</li>
<li>Online Subscription</li>
<li>Movies</li>
<li>Culinary</li>
<li>Documentary</li>
<li>Adult</li> 
 </ul>

<h4>Stream Platforms Model</h4>

<ul>
<li>streamName: {type: String, required: true},</li>
<li>streamImage: {type: String, default:'defaultImage.jpg'},</li>
<li>genre: { type: String, required: true},</li>
<li>streamWebsite: {type: String},</li>
<li>platform: [ ],</li>
<li>allowedCountries: [ ]</li>
</ul>

Stream Platforms:

<ul>
    
<li>Netflix</li>
<li>Disney+</li>
<li>AmazonPrime</li>
<li>HBO Max</li>
<li>Paramount+</li>
<li>Tencent Video</li>
<li>iQIYI</li>
<li>Hulu</li>
<li>Discovery +</li>
<li>Crunchyroll</li>
<li>Apple TV+</li>
<li>Youtube Premium</li>
</ul>


<h2>Backlog</h2>

<ol>
<li>Multilingual website translation</li>
<li>Admin Privilege</li>
<li>More Responsive breakpoints</li>
</ol>