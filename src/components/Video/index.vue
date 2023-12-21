<template>
  <div class="video-box" @click="play()">
    <video
      :src="props.url"
      ref="video"
      :style="{ objectFit: isFullScreen ? 'contain' : 'cover' }"
      @fullscreenchange="fullscreenchange"
    ></video>
    <div class="icon-box">
      <VideoPlay class="video-play-icon"></VideoPlay>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoPlay } from "@element-plus/icons-vue"
import { ref } from "vue"

const video = ref<any>(null)
const isFullScreen = ref<boolean>(false)

interface Props {
  url: string
}
const props = withDefaults(defineProps<Props>(), {})

const play = () => {
  if (video.value.requestFullscreen) {
    video.value.requestFullscreen()
  } else if (video.value.mozRequestFullScreen) {
    video.value.mozRequestFullScreen()
  } else if (video.value.webkitRequestFullscreen) {
    video.value.webkitRequestFullscreen()
  } else if (video.value.msRequestFullscreen) {
    video.value.msRequestFullscreen()
  }
  isFullScreen.value = true
}

const fullscreenchange = () => {
  if (!document.fullscreenElement) {
    video.value.currentTime = 0
    video.value.pause()
    isFullScreen.value = false
  }
}
</script>

<style scoped lang="scss">
.video-box {
  position: relative;
  cursor: pointer;

  video {
    width: 100%;
    height: 100%;
  }

  .icon-box {
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .video-play-icon {
      width: 30px;
      height: 30px;
      color: #ddd;
    }
  }
}
</style>
