<template>
    <b-modal header-bg-variant="warning" id="mymodal"  title="Newsletter" class="text-center" hide-footer hide-header>
    <!-- Material form subscription -->

    <h5 class="card-header success-color white-text text-center py-4">
        <strong>Subscribe</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5">

        <!-- Form -->
        <form class="text-center" style="color: #757575;">

            <p>Join our mailing list. We write rarely, but only the best content.</p>

            <p>
                <a href="" target="_blank">See the last newsletter</a>
            </p>

            <!-- Name -->
            <div class="md-form mt-3">
                <input type="text" id="materialSubscriptionFormPasswords" class="form-control">
                <label for="materialSubscriptionFormPasswords">Name</label>
            </div>

            <!-- E-mai -->
            <div class="md-form">
                <input type="email" id="materialSubscriptionFormEmail" class="form-control">
                <label for="materialSubscriptionFormEmail">E-mail</label>
            </div>

            <!-- Sign in button -->
            <button class="btn btn-outline-success btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>

        </form>
        <!-- Form -->

    </div>

<!-- Material form subscription -->
    </b-modal>
</template>


<script>
  export default {
    name: 'Basic',
    components: {
    }
  }
</script>

<style>

</style>
