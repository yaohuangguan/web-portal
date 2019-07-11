<template>
    <div class="container">


         <div class="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
      <div class="title-box-d">
        <h3 class="title-d">Reviews</h3>
      </div>
      <div class="box-comments">
        <ul class="list-comments">
          <li>
            <div class="comment-avatar">
              <img src="img/author-2.jpg" alt="">
            </div>
            <div class="comment-details">
              <h4 class="comment-author">Emma Stone</h4>
              <span>18 Sep 2017</span>
              <p class="comment-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                ipsam temporibus maiores
                quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis.
              </p>
              <a>Reply</a>
            </div>
          </li>
          <li class="comment-children">
            <div class="comment-avatar">
              <img src="img/author-1.jpg" alt="">
            </div>
            <div class="comment-details">
              <h4 class="comment-author">Oliver Colmenares</h4>
              <span>18 Sep 2017</span>
              <p class="comment-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                ipsam temporibus maiores
                quae.
              </p>
              <a >Reply</a>
            </div>
          </li>
          <li>
            <div class="comment-avatar">
              <img src="img/author-2.jpg" alt="">
            </div>
            <div class="comment-details">
              <h4 class="comment-author">Emma Stone</h4>
              <span>18 Sep 2017</span>
              <p class="comment-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque
                ipsam temporibus maiores
                quae natus libero optio.
              </p>
              <a>Reply</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="form-comments">
        <div class="title-box-d">
          <h3 class="title-d"> WRITE A REVIEW</h3>
        </div>
        <form class="form-a">
          <div class="row">
            <div class="col-md-6 mb-3">
              
          
              <div class="form-group">
               
                <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45"
                  rows="5" required></textarea>
              </div>
            
            <div class="col-md-12">
              <button type="submit" class="btn btn-a">Write Review</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
   
</template>

<script>
export default {
    name:'comment'
}
</script>

<style scoped>

</style>
