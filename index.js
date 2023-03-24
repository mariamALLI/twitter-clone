/*
Challenge:
1. Put all of the data in its own file called
   data.js, and export it back into index.js. 
   Make any changes to index.html that are
   necessary to make this work.
2. Log out tweetsData.
*/

import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

/*
Challenge:
1. Use a "for of" to iterate over the data and 
   create HTML string for each tweet using the 
   boilerplate inside the getFeedHtml(). Replace UPPERCASE text
   with data from the tweets. 
2. Store this HTML in a let called "feedHtml".
3. Log out feedHtml.
4. Call getFeedHtml to check it's working.
*/ 

/*
Challenge:
1. Replace the for of with a forEach.
*/

/*
Challenge:
Remeber that data attribute helps store extra info in html element
1. Add data attributes to each of the  <i> tags. You can call
   them 'reply', 'like', and 'retweet’.
2. Each data attribute should hold the tweet's uuid.
*/

/*
Challenge:
1. Use an if statement to set the value of 
   'likeIconClass', 'retweetIconClass' to the string 'liked', 'retweeted' respectively created in CSS
   if the tweet has been liked. 
2. In the like icon tag, add 'likeIconClass'  and 'retweetIconClass'
   to the list of classes.
*/
/*
Use an if statement to check if a tweet as replies by 
loging out the tweet uuid. After checking if it logs out
,then replace the log out with the following steps of chanllenge

Challenge:
1. If a tweet has replies, iterate through the replies
   and wrap each one in the HTML template provided below. 
   Make sure to replace words in UPPERCASE with data from 
   the tweet. On each iteration, add this HTML to repliesHtml.

   /*
Challenge:
2. Place repliesHtml in its parent div remembering 
   to update that divs id.
3. remember to add the tweet.uuid to the id of the replies div and also
add the className hidden to help hide the replies and make it show only 
when the reply button is clicked   
*/
  

function getFeedHtml(){
    let feedHtml = ''

    tweetsData.forEach((tweet)=>{
        let retweetIconClass = ''
        let likeIconClass = ''

        if(tweet.isLiked){
            likeIconClass = 'liked'
        }else if(tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }

      /*   Initialize an empty stry for the repliesHtml boilerplate and store it
      in a variable*/

      let repliesHtml = ''

        if(tweet.replies.length > 0){
         tweet.replies.forEach((reply)=>{
            repliesHtml += `
            <div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
        </div>
            `
         })
        }


        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class='fa-regular fa-comment' data-reply='${tweet.uuid}'></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class='fa-solid fa-heart ${likeIconClass}' data-likes='${tweet.uuid}'></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class='fa-solid fa-retweet ${retweetIconClass}' data-retweet='${tweet.uuid}'></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div> 
</div>
     `
    })
    return feedHtml
} 


/*
Challenge:
1. Take control of the ‘feed’ div.
2. Render the HTML returned by the getFeedHtml 
   function to the 'feed' div. 
   See if you can do this with just one line of code!
*/
function renderTweet(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}
// call renderTweet
renderTweet()

/*
Challenge:
1. When a like icon is clicked, this function 
   should log out the contents of the 'data-like' 
   data-attribute.

⚠️ Clicking on the page but not on the like icon
   will log out 'undefined'. That is absolutely fine.

   Remeber we need to create an eventListener that will help make clicking 
   on any of the icons easy without writing toomuch code
*/

/*
Challenge:
1. If a like icon has been clicked, call handleLikeClick()
   passing in the uuid that is stored in the like icon's 
   data attribute. 
*/
/*
Challenge:
1. Make this eventListener call "handleRetweetClick()" 
   when the retweet icon is clicked, passing in the
   uuid from that tweet.  
*/

/*
Challenge:
1. Add an else if so that if the Tweet button
   is clicked, handleTweetBtnClick is called.
*/ 
document.addEventListener('click', (e)=>{
    // for Likes
 if(e.target.dataset.likes){
    handleLikeClick(e.target.dataset.likes)
 }
      // for Retweets
   else if(e.target.dataset.retweet){
    handleRetweetClick(e.target.dataset.retweet)
 } 
      // for replies
  else if (e.target.dataset.reply){
   handleReplyClick(e.target.dataset.reply)
  } else if(e.target.id === 'tweet-btn'){
   handleTweetBtn()
  }     
 
 
})

/*
Challenge:
2. handleLikeClick should take in a parameter. 
   You can call this parameter 'tweetId'. For 
   now just log out tweetId.
*/

/*
Challenge:
1. Inside the handleLikeClick(), Iterate over tweetsData and use the uuid 
   saved in tweetId to identify the liked
   tweet's object. Save that object to a 
   new const called 'targetTweetObj'.
⚠️ targetTweetObj should hold an object, NOT
   an array.
2. Increment targetTweetObj's 'likes' count 
   by 1.
3. Log out targetTweetObj.
4. place the renderTweet() so that it can show on the screen
REMEMBER that the index[0] placed at the end of the const targetTweetObj
wiil help produce an object instead of an array.
*/

/*
Challenge:
1. When a tweet is liked, it's 'isLiked' property
   should be set to true.
2. When a tweet is unliked, it's 'isLiked' property
   should be set to false and its 'likes' count
   should be decremented.
*/ 

/*
Challenge:
1. Delete the two lines of code marked below and
   replace them with just one line of code outside 
   of the if else.
   Hint: Google the logical NOT operator (!)
*/ 
function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter((tweet)=>{
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isLiked){
        // if the tweet isliked we decrease the like
        targetTweetObj.likes--
    }else{
        // if tweet is not liked we increase the like
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked

    renderTweet()
}

/*
Challenge:
1. Find the retweeted tweet's object in tweetsData 
   and save it to a const.
2. Increment or decrement the retweet count of the 
   tweet and flip its isRetweeted boolean.
3. Call the render function.  
*/
function handleRetweetClick(tweetId){
    const targetRetweetObj = tweetsData.filter((tweet)=>{
        return tweet.uuid === tweetId
    })[0]

    if(targetRetweetObj.isRetweeted){
        targetRetweetObj.retweets--
    }else{
        targetRetweetObj.retweets++
    }
    targetRetweetObj.isRetweeted = !targetRetweetObj.isRetweeted
    renderTweet()
}

/*
Challenge:
1. Use the uuid stored in 'replyId' to take control 
   of the div containing that tweet’s replies. 
   (Check the HTML string below to remind yourself 
   what id that div will have.)  
2. Toggle the CSS class "hidden" on that div. 
*/

function handleReplyClick(replyId){
   document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

/*
We refactor the tweetbtn eventlistener at the begning and create a 
function to handle the button while placing its listener inside the document
listener created

----
Challenge:
1. Bring in uuidjs.
Challenge:
2. When the Tweet button is clicked, log out an object
   for a new tweet. Make sure you include the text of 
   the tweet (how can you get that?) and a unique 
   identifier using uuidjs.
   
   The handle @Scrimba (or whatever you prefer) and 
   the profile pic scrimbalogo.png can be hard-coded.
3. Add the new tweet object to 'tweetsData'
   and make it render at the top of the feed. 
4. No empty tweets! (an if else statement can be used)
5. Clear the textarea after tweeting!

*/ 
function handleTweetBtn(){

   const tweetInput = document.getElementById("tweet-input")

   if(tweetInput.value){
   tweetsData.unshift({
      handle: `@Moa`,
      profilePic: `images/moa3e.jpeg`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4()
   })
   tweetInput.value = ''
   renderTweet()
}
}