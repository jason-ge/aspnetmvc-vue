<template>
  <div v-once></div>
</template>

<script>
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'

export default {
  props: ['loading'],
  watch: {
    loading: {
      handler(loading) {
        if (loading) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true,
    }
  },
  methods: {
    open() {
      // Attaching a `pleaseWaitInstance` property (no need to declare)...
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
            logo: 'images/loading.gif',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            loadingHtml: '<p class="loading-message" style="color: #CCC;"><i class="fas fa-sync fa-spin fa-4x"></i></p>'
        })
      }
    },
    close() {
      if (this.pleaseWaitInstance) {
        this.pleaseWaitInstance.finish()
        this.pleaseWaitInstance = null
      }
    }
  }
}
</script>
