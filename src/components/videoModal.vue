
<template>
<div>
 

  <b-modal header-bg-variant="warning" id="modal-1" size="lg" centered title="How it works" hide-footer hide-header>
    <div class="container">
        <div class="row">
            <slot></slot>
      
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/jGrd2Xxnahk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 

        </div>
    </div>
  </b-modal>
</div>
</template>

<script>

export default {
    name:'mapModal'
}
</script>
