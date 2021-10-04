<template>
  <div class="modal fade" ref="myModal" tabindex="-1">
    <div class="modal-dialog" :class="className">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalTitle }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ref="btnClose"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Modal } from 'bootstrap'
export default {
  props: {
    modalTitle: String,
    isButton: {
      type: Boolean,
      default: true,
    },
    className: {
      type: String,
    },
  },
  methods: {

  },
}
</script>