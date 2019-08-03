<template>
  <button :class="btnColor">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['btnColor'],
};
</script>

<style scoped>
  .btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .btn-small {
    
  }

  .btn-medium {
    padding: .7em 4.5em;
  }

  .btn-large {
    padding: .7em 5em;
  }

  .btn-info1 {
    background-color: rgba(61, 204, 89, 1);;
    padding:1.8rem;
    margin-right:-10px;
    margin-top:-3px;
  }
  .btn-info1:hover{
    background-color:rgba(61, 204, 89, 1);
  }

  .btn-sucess {
    background-color: #27AE60;
  }

  .btn-danger {
    background-color: #e74c3c;
  }

  .btn img {
    max-width: 20px;

  }

</style>
