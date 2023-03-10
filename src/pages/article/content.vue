<template>
  <div ref="element" class="detail">
    <transition name="module">
      <div
        class="oirigin"
        :class="{
          original: isOriginal,
          reprint: isReprint,
          hybrid: isHybrid
        }"
      >
        <i18n :k="LanguageKey.ORIGIN_ORIGINAL" v-if="isOriginal" />
        <i18n :k="LanguageKey.ORIGIN_REPRINT" v-else-if="isReprint" />
        <i18n :k="LanguageKey.ORIGIN_HYBRID" v-else-if="isHybrid" />
      </div>
    </transition>
    <div class="knowledge" key="knowledge">
      <div class="title">
        <h2 class="text">{{ article.title }}</h2>
        <div class="meta">
          <i class="iconfont icon-t"></i>
          <i18n
            :zh="`共 ${numberSplit(articleDetailStore.contentLength)} 字，需阅读 ${
              articleDetailStore.readMinutes
            } 分钟`"
            :en="`${numberSplit(articleDetailStore.contentLength)} words, ${
              articleDetailStore.readMinutes
            } min read`"
          />
          <responsive desktop>
            <divider type="vertical" class="vertical" />
            <span>
              <i class="iconfont icon-clock-outline"></i>
              <udate to="YMDm" :date="article.create_at" separator="/" />
            </span>
          </responsive>
          <divider type="vertical" class="vertical" />
          <span>
            <i class="iconfont icon-eye"></i>
            <span>{{ numberSplit(article.meta.views) }}&nbsp;</span>
            <i18n :k="LanguageKey.ARTICLE_VIEWS" />
          </span>
        </div>
      </div>
      <markdown :html="articleDetailStore.defaultContent?.html" />
      <transition name="module" mode="out-in" @after-enter="handleFullContentRendered">
        <div :id="readmoreId" v-if="isRenderMoreEnabled" class="readmore">
          <button class="readmore-btn" :disabled="isRenderMoreContent" @click="handleRenderMore">
            <i18n
              :k="
                isRenderMoreContent ? LanguageKey.ARTICLE_RENDERING : LanguageKey.ARTICLE_READ_ALL
              "
            />
            <i class="iconfont icon-loadmore"></i>
          </button>
        </div>
        <markdown
          v-else-if="articleDetailStore.renderedFullContent"
          :html="articleDetailStore.moreContent?.html"
        />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, nextTick, onMounted, onUpdated, PropType } from 'vue'
  import { LanguageKey } from '/@/language'
  import { Article, useArticleDetailStore } from '/@/stores/article'
  import { isOriginalType, isHybridType, isReprintType } from '/@/transforms/state'
  import { numberSplit } from '/@/transforms/text'
  import Markdown from '/@/components/common/markdown.vue'

  export enum Events {
    Rendered = 'rendered'
  }

  export default defineComponent({
    name: 'ArticleContent',
    components: { Markdown },
    props: {
      article: {
        type: Object as PropType<Article>,
        required: true
      },
      readmoreId: {
        type: String,
        required: true
      }
    },
    emits: [Events.Rendered],
    setup(props, context) {
      const articleDetailStore = useArticleDetailStore()
      const isHybrid = computed(() => isHybridType(props.article.origin!))
      const isReprint = computed(() => isReprintType(props.article.origin!))
      const isOriginal = computed(() => isOriginalType(props.article.origin!))

      const element = ref<HTMLElement>()
      const isRenderMoreContent = ref(false)
      const isRenderMoreEnabled = computed(() => {
        return articleDetailStore.isLongContent && !articleDetailStore.renderedFullContent
      })

      const handleRenderMore = () => {
        isRenderMoreContent.value = true
        nextTick(() => {
          setTimeout(() => {
            articleDetailStore.renderFullContent()
            isRenderMoreContent.value = false
          }, 0)
        })
      }

      const handleFullContentRendered = () => {
        context.emit(Events.Rendered, element.value)
      }

      onMounted(() => handleFullContentRendered())
      onUpdated(() => handleFullContentRendered())

      return {
        LanguageKey,
        element,
        isHybrid,
        isReprint,
        isOriginal,
        articleDetailStore,
        isRenderMoreEnabled,
        isRenderMoreContent,
        numberSplit,
        handleRenderMore,
        handleFullContentRendered
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import 'src/styles/variables.scss';
  @import 'src/styles/mixins.scss';

  .detail {
    padding: 1rem 2rem;
    position: relative;
    overflow: hidden;
    height: auto;
    transition: height $transition-time-normal;

    .oirigin {
      position: absolute;
      top: 0.6rem;
      left: -2.4rem;
      transform: rotate(-45deg);
      width: 8rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      transform-origin: center;
      color: $white;
      font-weight: bold;
      font-size: $font-size-small;
      background-color: var(--color);
      &.original {
        --color: #{rgba($surmon, 0.7)};
      }
      &.hybrid {
        --color: #{rgba($accent, 0.7)};
      }
      &.reprint {
        --color: #{rgba($red, 0.7)};
      }
    }

    .knowledge {
      user-select: text;
      position: relative;

      .title {
        margin: 1em 0 1.5em 0;
        text-align: center;

        .text {
          font-weight: 700;
          font-size: $font-size-h2 * 0.95;
          margin-bottom: $gap;
        }

        .meta {
          display: inline-block;
          color: $text-disabled;
          font-size: $font-size-small;
          user-select: none;
          line-height: 2;
          .iconfont {
            margin-right: $xs-gap;
          }
          .vertical {
            top: -1px;
          }
        }
      }

      .readmore {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 18rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to top, $module-bg-hover, transparent);

        .readmore-btn {
          width: 80%;
          height: 3rem;
          margin-top: 2rem;
          line-height: 3rem;
          text-align: center;
          color: $text-reversal;
          background-color: $primary-lighter;
          @include background-transition();
          @include radius-box($xs-radius);

          &[disabled] {
            cursor: no-drop;
          }

          &:hover {
            background-color: $primary;
          }

          .iconfont {
            margin-left: $sm-gap;
          }
        }
      }
    }
  }
</style>
