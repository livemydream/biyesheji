<template>
  <div class="captured">
    <error-component v-if="error" :error="error" @resolve="handleResolveRoute">
      <template #resolve-text>
        <i18n :k="LanguageKey.BACK_TO_HOME_PAGE" />
      </template>
    </error-component>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onErrorCaptured } from 'vue'
  import { LanguageKey } from '/@/language'
  import { RouteName } from '/@/app/router'
  import { useEnhancer } from '/@/app/enhancer'
  import { getLayoutByRouteMeta } from '/@/transforms/layout'
  import ErrorComponent from './error.vue'

  export default defineComponent({
    name: 'Captured',
    components: {
      ErrorComponent
    },
    setup() {
      const { router, globalState } = useEnhancer()
      const handleResolveRoute = () => {
        router.push({ name: RouteName.Home }).then(() => {
          // MARK: 顺序很重要！要先设置布局，再渲染，避免闪屏
          globalState.setLayoutColumn(getLayoutByRouteMeta(router.currentRoute.value.meta))
          globalState.setRenderError(null)
        })
      }

      onErrorCaptured((_error: any) => {
        globalState.setRenderError(_error)
        return false
      })

      return {
        error: globalState.renderError,
        handleResolveRoute,
        LanguageKey
      }
    }
  })
</script>
