<template>
     <div ref="modal" v-if="generalStore.currentModal === 'modal1'" class="modal">
              <div class="modal-content">
                Content for Modal 1
                <button @click="generalStore.closeModal()">Close </button>
              </div>
        </div>
</template>
<script setup>
import { useGeneralStore } from '@/stores/general'
const generalStore = useGeneralStore()
</script>