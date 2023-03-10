<template>
  <div class="wall">
    <transition name="module" mode="out-in">
      <div
        ref="picture-box"
        :key="currentWallpaper.humanizedImageUrl"
        class="picture-box"
        :title="currentWallpaper.copyright"
        :style="{
          backgroundImage: `url(${currentWallpaper.humanizedImageUrl})`
        }"
      />
    </transition>
    <div class="story-box">
      <template v-if="currentWallpaper.title">
        <h2 class="title">{{ currentWallpaper.title }}</h2>
        <p class="sub-title">{{ currentWallpaper.copyright }}</p>
      </template>
      <template v-else>
        <h2 class="title lonely">{{ currentWallpaper.copyright }}</h2>
      </template>
      <p class="desc">{{ currentWallpaper.desc }}</p>
      <div class="tools">
        <ulink
          class="button"
          :href="currentWallpaper.humanizedCopyrightUrl"
          :title="currentWallpaper.bsTitle"
        >
          <i class="iconfont icon-bing"></i>
        </ulink>
        <button class="button" title="Prev" :disabled="index <= 0" @click="index--">
          <i class="iconfont icon-prev"></i>
        </button>
        <button
          class="button"
          title="Next"
          :disabled="index >= wallpapers.length - 1"
          @click="index++"
        >
          <i class="iconfont icon-next"></i>
        </button>
        <button class="button" title="Close" @click="handleClose">
          <i class="iconfont icon-cancel"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import { useEnhancer } from '/@/app/enhancer'
  import { useWallpaperStore } from '/@/stores/wallpaper'
  import { Language } from '/@/language'

  export enum WallpaperWallEvent {
    Close = 'close'
  }

  export default defineComponent({
    name: 'WallpaperWall',
    emits: [WallpaperWallEvent.Close],
    setup(_, context) {
      const { i18n } = useEnhancer()
      const wallpaperStore = useWallpaperStore()
      const wallpapers = computed(() => wallpaperStore.papers(i18n.language.value as Language)!)
      const index = ref(0)
      const currentWallpaper = computed(
        () => wallpapers.value?.length && wallpapers.value?.[index.value]
      )

      const handleClose = () => context.emit(WallpaperWallEvent.Close)

      return {
        index,
        wallpapers,
        currentWallpaper,
        handleClose
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import 'src/styles/variables.scss';
  @import 'src/styles/mixins.scss';

  .wall {
    position: relative;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 88vw;
    height: 88vh;

    .picture-box {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .story-box {
      position: absolute;
      padding: 2rem 4rem;
      background-color: $module-bg-translucent;
      bottom: 0;
      width: 100%;
      height: auto;

      .title,
      .sub-title,
      .desc {
        @include title-shadow();
      }

      .title {
        margin-top: 0;
        &.lonely {
          margin-bottom: 3rem;
        }
      }

      .desc {
        line-height: 2rem;
        margin-bottom: $gap * 2;
      }

      .tools {
        display: flex;
        $size: 3rem;

        .button {
          display: block;
          width: $size;
          height: $size;
          line-height: $size;
          margin-right: $gap;
          text-align: center;
          background-color: $module-bg;
          @include radius-box($xs-radius);

          &[disabled] {
            opacity: 0.6;
          }

          &:not([disabled]) {
            &:hover {
              background-color: $module-bg-darker-1;
            }
          }
        }
      }
    }
  }
</style>
