/**
 * @file App components
 * @module app.component
 * @author Surmon <https://github.com/surmon-china>
 */

import { App } from 'vue'
import Webfont from '/@/components/common/webfont.vue'
import Spin from '/@/components/common/spin.vue'
import Empty from '/@/components/common/empty.vue'
import Divider from '/@/components/common/divider.vue'
import Udate from '/@/components/common/udate'
import Ulink from '/@/components/common/ulink'
import Uimage from '/@/components/common/uimage'
import Placeholder from '/@/components/common/placeholder'
import ClientOnly from '/@/components/common/client-only'
import Container from '/@/components/common/container'
import { Responsive, DesktopOnly } from '/@/components/common/responsive'

import SkeletonBase from '/@/components/common/skeleton/base.vue'
import SkeletonLine from '/@/components/common/skeleton/line.vue'
import SkeletonParagraph from '/@/components/common/skeleton/paragraph.vue'

declare module 'vue' {
  export interface GlobalComponents {
    Spin: typeof Spin
    Empty: typeof Empty
    Webfont: typeof Webfont
    Divider: typeof Divider
    Ulink: typeof Ulink
    ClientOnly: typeof ClientOnly
    Container: typeof Container
  }
}

export default function (app: App) {
  app.component(Webfont.name as string, Webfont)
  app.component(Spin.name as string, Spin)
  app.component(Empty.name as string, Empty)
  app.component(Divider.name as string, Divider)
  app.component(Udate.name, Udate)
  app.component(Ulink.name, Ulink)
  app.component(Uimage.name, Uimage)
  app.component(Placeholder.name, Placeholder)

  app.component(ClientOnly.name, ClientOnly)
  app.component(Responsive.name, Responsive)
  app.component(DesktopOnly.name, DesktopOnly)
  app.component(Container.name, Container)

  app.component(SkeletonBase.name as string, SkeletonBase)
  app.component(SkeletonLine.name as string, SkeletonLine)
  app.component(SkeletonParagraph.name as string, SkeletonParagraph)
}
