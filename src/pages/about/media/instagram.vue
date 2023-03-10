<template>
  <placeholder :i18n-key="LanguageKey.EMPTY_PLACEHOLDER" :loading="fetching" :data="insMedias">
    <template #loading>
      <ul class="list">
        <li class="item" v-for="i in 24" :key="i">
          <skeleton-base />
        </li>
      </ul>
    </template>
    <template #default>
      <ul class="list">
        <li class="item" :key="index" v-for="(media, index) in insMedias">
          <ulink class="link" :href="media.permalink" :title="media.caption">
            <uimage class="cover" :src="getInstagramImage(media, 't')" :alt="media.caption" />
            <div class="type-icon">
              <i class="iconfont icon-video" v-if="isVideoMediaIns(media)"></i>
              <i class="iconfont icon-album" v-if="isAlbumMediaIns(media)"></i>
            </div>
            <div class="mask">
              <i class="iconfont icon-music-play" v-if="isVideoMediaIns(media)"></i>
              <i class="iconfont icon-eye" v-else></i>
            </div>
          </ulink>
        </li>
        <li class="item">
          <ulink class="link more" :href="VALUABLE_LINKS.INSTAGRAM">•••</ulink>
        </li>
      </ul>
    </template>
  </placeholder>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, onMounted } from 'vue'
  import { useInstagramMediasStore } from '/@/stores/media'
  import { isVideoMediaIns, isAlbumMediaIns, getInstagramImage } from '/@/transforms/media'
  import { VALUABLE_LINKS } from '/@/config/app.config'
  import { LanguageKey } from '/@/language'

  export default defineComponent({
    name: 'AboutPageInstagram',
    setup() {
      const fetching = ref(true)
      const store = useInstagramMediasStore()
      const insMedias = computed(() => store.data.slice(0, 23))

      onMounted(() => {
        store.fetch().finally(() => {
          fetching.value = false
        })
      })

      return {
        isVideoMediaIns,
        isAlbumMediaIns,
        getInstagramImage,
        LanguageKey,
        VALUABLE_LINKS,
        fetching,
        store,
        insMedias
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import 'src/styles/variables.scss';
  @import 'src/styles/mixins.scss';

  .list {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    $item-size: 74px;

    .item {
      position: relative;
      height: $item-size;

      .link {
        display: block;
        width: 100%;
        height: 100%;
        background-color: $module-bg-darker-1;
        opacity: 0.8;
        @include visibility-transition();
        &:hover {
          opacity: 1;
          .mask {
            @include visible();
          }
        }

        &.more {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $font-size-h3;
        }

        .cover {
          width: 100%;
          height: 100%;
          border-radius: $xs-radius;
          object-fit: cover;
        }

        .type-icon {
          opacity: 0.7;
          position: absolute;
          top: math.div($xs-gap, 2);
          right: $xs-gap;
          color: $white;
        }

        .mask {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $white;
          background-color: rgba(0, 0, 0, 0.3);
          @include visibility-transition();
          @include hidden();
        }
      }
    }
  }
</style>
