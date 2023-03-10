# Changelog

All notable changes to this project will be documented in this file.

### v3.22.0 (2022-12-27)

**Feature**

- Improve github sponsors

### v3.21.0 (2022-12-23)

**Feature**

- Update various dependencies
- Upgrade `@vueuse/head` composable
- Improve `<verse>` paragraph style
- Improve meta tags `og:*`
- Keep axios v1.1.3
  - [AxiosError: unexpected end of file](https://github.com/axios/axios/issues/5346)
  - [after upgrading to "axios": "^1.2.1"](https://github.com/axios/axios/issues/5357)

### v3.20.0 (2022-10-13)

**Feature**

- Add markdown `<verse>` paragraph support

### v3.19.0 (2022-10-06)

**Feature**

- NFT page items

### v3.18.0 (2022-10-01)

**Feature**

- Remove merch page
- Remove freelancer page
- Add NFTs page (opensea.io)
- Add twitter and og meta
- Improve fullpage components
- Improve sponsor page
- Redesign lens page
- Refactoring archive page
- Refactoring mobile flow (infinitescroll)

### v3.16.1 (2022-09-28)

**Fix**

- Fix sponsor page hash ID

### v3.16.0 (2022-09-25)

**Feature**

- Improve PC aside search input
- Improve mobile header search mask

### v3.15.0 (2022-09-23)

**Feature**

- Upgrade `site` and `article` vote API
- Remove `identity` store legacy logic

### v3.14.7 (2022-09-18)

**Feature**

- Improve markdown `<u>` style

### v3.14.6 (2022-09-09)

**Feature**

- Improve lens page
- Improve page banners
- Refactoring sponsor component

### v3.14.4 (2022-09-08)

**Feature**

- Support Instagram video media
- Improve Lens page UX

### v3.14.2 (2022-09-05)

**Feature**

- Improve iframe style
- Improve merch page data structure

### v3.14.0 (2022-08-20)

**Feature**

- Upgrade vite to v3
- Improve about page modules
- Improve sponsor style
- Improve `mapbox-gl`
- remove `sanitize-html` and `dompurify` [#9200](https://github.com/vitejs/vite/issues/9200) [#560](https://github.com/apostrophecms/sanitize-html/issues/560)

**Fix**

- Index page Twitter module style

### v3.13.0 (2022-06-08)

**Feature**

- Redesign About page footprint module

### v3.12.0 (2022-05-29)

**Feature**

- Add `fetchStore` in stores
- Redesign About page
- Refactoring stores
- Remove Job page
- Remove AD in mobile flow page

### v3.11.0 (2022-05-01)

**Chore**

- Upgrade deps

**Feature**

- Improve `lozad` directive and composable.
- Improve `webfont` component.
- Improve `ulink` component.
- Improve image loading and error fallback status.

### v3.8.2 (2022-03-18)

**Feature**

- Add Sponsor page
- Upgrade Sponsor component (modal)
- Remove CSS `source-url` and `cdn-url`

### v3.8.0 (2022-03-15)

**Feature**

- Upgrade `lru-cache` to [`v7.x`](https://github.com/isaacs/node-lru-cache/blob/main/CHANGELOG.md#v7---2022-02)
- Improve `highlight.js` themes
- Improve styles

**Chore**

- Upgrade deps
- Remove `@vue/x` deps

### v3.6.30 (2022-03-02)

**Feature**

- Add feedback widget

### v3.6.27 (2022-02-20)

**Feature**

- Add instagram & twitter calendar to About page calendar
- Improve i18n & language
- Improve transforms
- `Udate` component

**Fix**

- Eslint with `@typescript-eslint`

### v3.6.24 (2022-02-17)

**Feature**

- About page GitHub cahrt to article calendar
- Music page to popup

### v3.6.1 (2022-01-16)

**Feature**

- Improve cache & cacher (Redis first & LRU second)

### v3.6.0 (2022-01-15)

**Feature**

- Announcement to Twitter
- improve BFF cacher logic

### v3.5.0 (2022-01-11)

**Feature**

- Bilibili to YouTube

### v3.4.5 (2022-01-05)

**Feature**

- Improve Article detail page

### v3.4.0 (2022-01-03)

**Feature**

- Add BFF proxy server
- Add Plogs on Lens page

### v3.3.6 (2022-01-02)

**Feature**

- Improve copyrighter when focus comment publisher

**Fix**

- Fix comment reply preview

### v3.3.4 (2022-01-01)

**Feature**

- Improve comment components

### v3.3.0 (2021-12-31)

**Feature**

- Disqus comment
- Remove comment blocklist
- Improve global config

### v3.2.15 (2021-12-22)

**Fix**

- Fix SSR render BUG

**Feature**

- Improve global styles
- Improve article detail page layout
- Improve article page like-share
- Improve article page skeleton
- Improve `comment` component
- Improve `loading` component

### v3.2.14 (2021-12-21)

**Fix**

- BFF tunnel service responser
- GTag events

**Feature**

- Improve background style
- Improve gtag events
- Improve state types `Extend`
- Add article language text on desktop flow

### v3.2.11 (2021-12-20)

**Fix**

- filters style url

### v3.2.10 (2021-12-20)

**Feature**

- Improve BFF server cache logic
- Serverless support ????

### v3.2.9 (2021-12-18)

**Fix**

- SSR `store.prefetch` [pass `pinia` instance](https://pinia.esm.dev/ssr/#using-the-store-outside-of-setup)

### v3.2.7 (2021-12-18)

**Fix**

- Wallpeper fetch on CSR mounted

### v3.2.6 (2021-12-17)

**Fix**

- Mobile flow page title

### v3.2.5 (2021-12-17)

**Feature**

- `HitHub` > `GitHub`
- Improve axios error infos
- Suspend `Wallpaper` service

### v3.2.4 (2021-12-17)

**Feature**

- Mobile pages
- `Archive` rename to `Flow`
- `Divider` component
- Improve universal styles
- Improve SSR cache logic

### v3.2.3 (2021-12-11)

**Feature**

- Improve email link
- Improve `job` page banner

### v3.2.2 (2021-12-11)3.2.3

**Feature**

- `public` resources
- Improve `archive` page
- Improve `search` input
- Improve `share` component

### v3.2.1 (2021-12-08)

**Fix**

- Fix pages banner height
- Fix PC aside AdSense

### v3.2.0 (2021-12-08)

**Feature**

- SSR > `usePrefetch`
- `Vuex` > `Pinia`
- Add Merch page
- Add Article nav in sidebar
- Refactoring SSR (by vite) done
- Refactoring Markdown parser
- Redesign Music player
- Redesign Comment component
- Improve About/Archive/Lens/Job pages
- Remove Desktop WebSocket
- Add SSR archive (RSS/Sitemap) function
- Upgrade Swiper (remove `vue-awesome-swiper`)

### v3.1.0 (2021-02-16)

**Feature**

- Upgrade deps
- Upgrade vite to 2.x
- Upgrade marked (sanitize)

### v3.0.3 (2020-12-24)

**Fix**

- Fix mobile search logic

**Improve**

- Improve body style for Google AdSense
- Improve music service (delay)

**Feature**

- Upgrade deps

### v3.0.2 (2020-12-16)

**Fix**

- Upgrade music service
- Hidden marked warn message (HACK)
- Add marked comment

**Feature**

- Add github chart server
- Add fortune page
- Add tunnel server for Music/BiliBili/Wallpaper

### v3.0.1 (2020-12-03)

**Fix**

- Console style
- Assets CDN url
- SSR prefetch \* validate
- Error page & 404 Page
- Upgrade deps

### v3.0.0 (2020-12-01)

### v3.0.0.beta-0.1 (2020-05-20)

**Upgrade**

- Nuxt.js to Vuniversal
- Vue -> Vue3
- ...

### v2.5.8 (2020-03-29)

**Update**

- Upgrade vue-awesome-swiper
- Upgrade `webpack.splitChunks` with `nuxt.config.js`

### v2.5.7 (2020-03-27)

**Update**

- Support i18n wallpaper

### v2.5.6 (2020-03-21)

**Add**

- Add ICP link
- Add font `SFMonoRegular` for code

**Update**

- Auto language by device
- Update README.md badges
- Update workflows config
- Update `code` style
- Upgrade Swiper component & filter styles
- Upgrade TypeScript config
- Upgrade ESlint config
- Upgrade /pc/layout/toolbox component to composition-api

**Removed**

- Removed `normalize.css`
- Removed `node-uuid`
- Removed `keep-alive`

### v2.5.4

- Replace App url to GitHub file URL
- Upgrade GA events

### v2.5.3

- Rplace RSS service with xml (nodepress)

### v2.5.2

- Add RSS service
- Improve About page
- Bugfix Comment editor

### v2.5.0

- TypeScript
- Improve styles
- Improve About page
- Improve emoji-rain component
- Improve relink transformer
- Add QR Code service
- Add MyMap module
- Remove RTC module
- Remove ColorBlock component
- Refactoring Music service
- Refactoring Theme to dark mode

### v2.4.9

- Update FUNDING.yml
- Update README.md
- Add instagram to navbar menu

### v2.4.8

- Improve CDN static
- Upgrade static style
- Update images style
- Add tobots.txt for CDN
- Pause `imageExt`

### v2.4.6

- Improve styles with PC / Mobile
- Improve Vlog page animation
- Improve PC Aside sticky logic
- Improve PC Aside ad control logic
- Improve PC Music and App page height logic
- Improve replace `@include hidden()`
- Remove `@css3-prefix xxx`
- Remove background component

### v2.4.5

- Improve mobile mask logic
- Improve styles with comment

### v2.4.4

- Remove project page
- Improve i18n languages
- Improve sponsor page
- Improve announcement component
- Update styles
- Update ads with banner & About page

### v2.4.3

- Improve sponsor page
- Replace project page to link

### v2.4.2

- Add sponsor page

### v2.4.1

- Update UA transformer
- Update article GA styles

### v2.4.0

- Upgrade dependencies
- Update js file modules
- Update package scripts
- Update logo effect
- Update style variables
- Update modules background
- Update console text and styles
- Add GitHub actions CI

### v2.3.0

- ?????? Nuxt ??? 2.8
- ?????? ?????????
- ?????? store ?????? api????????????????????????????????????
- ?????? ???????????????
- ?????? ??????????????????
- ?????? ????????????
- ?????? ????????????????????????
- ?????? custom webpack loader

### v2.2.3

- ?????? ??????
- ?????? ?????? Banner ?????????PC ??????????????????????????????H5 ??????????????????????????????
- ?????? ?????????????????????????????????

### v2.2.2

- ?????? ????????????????????? Bug
- ?????? PC ????????????????????? Alimama

### v2.2.1

- ?????? ????????? class???????????? Block
- ?????? ??????
- ?????? App ?????????????????????
- ?????? Banner ??????
- ?????? ????????????

### v2.2.0

- ?????? ??????
- ?????? ????????????
- ?????? ??????????????????
- ?????? ??????
- ?????? ???????????????

### 2.1.4

- ?????? ????????????????????????????????????????????? vlog ????????????
- ?????? marked ??????????????? id ?????????
- ?????? wallpaper humanizeUrl ??????
- ?????? ???????????????????????????????????????????????????

### 2.1.2

- ?????? Nuxt ??? 2.4.0
- ?????? module
- ?????? ?????????????????????
- ?????? ?????? icon ??????

### 2.1.0

- ?????? Store ??????
- ?????? Comment ??????????????????
- ?????? ????????????
- ?????? markdown ?????????
- ?????? ????????????
- ?????? category???tag ??? i18n ????????????
- ?????? Swiper ??? SPA ?????????
- ?????? Vlog ????????????
- ?????? ??????????????? loading

### v2.0.0

- ?????? ??????????????????
- ?????? ?????????????????????
- ?????? ??????????????????
- ?????? ????????????
- ?????? Update Nuxt to 2
- ????????????????????????
- ??????????????????
- ??????????????????
- ?????????????????????????????????
- ??????????????????
- ????????????????????????
- ??????????????????
- ???????????????????????????
- ??????????????????
- ??????????????????

### v1.2.6

- ?????? APP ????????????
- ?????????????????????
- ??????????????????
- ?????? iconfont ??????

### v1.2.5

- Update Nuxt to v1.4.2
- Update Vue vue-server-renderer vue-template-compiler to 2.5.17
- ???????????????????????????
- ?????? Logo ????????????
- ?????? Header ?????????

### v1.2.4

- ?????? ???????????????????????????????????????

### v1.2.2

- ?????? iconfont
- ?????? ???????????????????????????
- ?????? ??????????????????????????????
- ?????? ????????????????????????

### v1.2.1

- ????????????
- ????????????
- ????????? ??????????????????????????? ?????????

### v1.2.0

- ??????????????????????????????????????????????????????????????????
- ?????????????????????????????????????????????????????????????????????????????? rtc?????????????????????
- ????????????????????????????????????????????? WebRtc ???????????????
- ?????????????????????????????????????????????????????????????????????????????????
- ????????????????????? i18n ???????????? i18n ?????????

### v1.1.0

- app ?????????????????????,????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
- http://music.163.com/#/playlist?id=638949385
- ??????????????????
- ????????? Nuxt??????????????? offline-plugin ??????????????????
- ??????????????????
- ????????????????????????
- ???????????????
- ?????????????????????
- ?????? 233333 ??????
- ????????????????????????
- ???????????? WebRTC ?????????????????????
- ?????? C++ ????????? TURN Server
- ????????????????????????
- ?????????????????????????????????
- ????????????????????????????????????
- ?????????????????????
- ???????????????????????????
- ?????????????????????
- ???????????????????????????????????? https://surmon.me/article/80
- ?????????????????????
- PWA ?????????https://pwa.nuxtjs.org/modules/workbox.html
- ?????????????????????

### v1.0.0

- ???????????????????????????idle-gc??????????????????????????????
- ?????????????????? push ??????
- ???????????? Https ??????????????? Bug
- ???????????????????????????????????? <> ??????
- fav.ico
- ????????????????????????????????????????????????
- ????????????????????????????????????????????????
- ?????????????????????????????????????????? 5 ???
- ??????????????????????????????
- ?????????????????????????????????????????????
- ???????????????????????????
- ?????? head ????????????????????????????????????
- ?????????????????????????????????
- ????????????
- ?????????????????????????????????????????? Tag ??????
- ????????????????????????????????????????????????????????????????????????????????????????????????????????? 100 ????????????????????????????????????
- ??????????????????????????????????????????????????? SEO
- ?????? message-box ??????????????????????????????????????????????????? json???????????????
- about ?????????????????????
- ???????????????????????????
- ???????????????????????????????????????
- ?????????????????????????????????????????????????????????????????????????????????????????????
- ???????????????????????????????????????????????? head
- ?????????????????????????????????
- ??????????????????????????????????????????
- README ??????
- vue2 ??? bug
- vue-meta\_\_dangerouslyDisableSanitizers ??? bug
- google ????????????
- ??????????????????
- ?????? https
- ?????????????????????????????? xml ??????
- ?????? meta ?????????????????????1.0 ??????????????????????????????
- ???????????????????????????????????????
- ?????????????????????????????????????????????????????????
- ??????????????????
- ??????????????????????????????jsdom + marked???????????????????????? code ??? class ?????? lang ??? pre
- ???????????????????????????
- ?????? https
- ?????????????????????
- ????????????????????????
- ???????????? hover ????????????
- ??????????????? tag ?????????????????????????????????????????????????????????????????????
- ??????????????????????????????????????????????????????
- ?????????????????????????????????????????????
- ?????????????????????????????????
- ??????????????????
- ??????????????????????????????????????????????????? a ?????????????????????????????? nofollow???tag ?????????????????????????????????????????????
- ????????????????????? marked ????????????????????? cheerio ???
- ?????????????????? marked ?????????????????????????????????
- ?????????????????????????????????????????????
- error.vue ???????????????????????????1.0 ??????
- ?????????????????????????????????
- ??????????????????
- ????????????????????????
- watchTabActive
- ????????????????????????
- ??????????????? bug
- ??????????????? linked
- ?????? app ?????????
