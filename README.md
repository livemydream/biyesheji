<br />

<p align="center">
  <a href="https://github.com/surmon-china/surmon.me" target="blank">
    <img src="/presses/logo.png" height="90" alt="surmon.me logo" />
  </a>
</p>

# Surmon.me

[![nodepress](https://raw.githubusercontent.com/surmon-china/nodepress/main/badge.svg)](https://github.com/surmon-china/nodepress)
&nbsp;
[![vue](https://img.shields.io/badge/MADE%20WITH-VUE-42a97a?style=for-the-badge&labelColor=35495d)](https://vuejs.org)
&nbsp;
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/surmon.me.svg?style=for-the-badge)](https://github.com/surmon-china/surmon.me/stargazers)
&nbsp;
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m791570495-ed407f6804efd6c9f3cd1d18?style=for-the-badge)](https://stats.uptimerobot.com/Q2k7OTXxJN/791570495)
&nbsp;
[![GitHub license](https://img.shields.io/github/license/surmon-china/surmon.me.svg?style=for-the-badge)](/LICENSE)

**My personal website and blog, powered by [Vue(3)](https://vuejs.org), API services provided by [NodePress](https://github.com/surmon-china/nodepress).**

**[surmon.me](https://surmon.me)**

---

**[Related projects](https://github.com/stars/surmon-china/lists/surmon-me)**

- **RESTful API service for blog:** [`nodepress`](https://github.com/surmon-china/nodepress) powered by nestjs
- **Blog admin site:** [`veact-admin`](https://github.com/surmon-china/veact-admin) powered by React & [`Veact`](https://github.com/veactjs/veact)
- **Blog native app:** [`surmon.me.native`](https://github.com/surmon-china/surmon.me.native) powered by react-native

## Screenshot

![](/presses/desktop.png)

![](/presses/mobile.png)

## Development Setup

```bash
# install dependencies
$ yarn

# SSR mode
$ yarn dev
$ yarn build
$ yarn start

# or SPA mode
$ yarn spa:dev
$ yarn spa:build
$ yarn spa:start

# lint test
$ yarn lint

# release
$ yarn release
```

## Actions setup

**Rule:**

- `Any PR open` → `CI:Build test`
- `New tag v*` → `CI:Create Release`
- `New tag | Release created` → `CI:Deploy` → `CI:Execute server script`

### Changelog

Detailed changes for each release are documented in the [release notes](/CHANGELOG.md).

### License

Licensed under the [MIT](/LICENSE) License.
