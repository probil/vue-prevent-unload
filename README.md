# 🚪 Vue prevent unload

[![npm](https://img.shields.io/npm/v/vue-prevent-unload.svg)](https://www.npmjs.com/package/vue-prevent-unload)
[![Github file size](https://img.shields.io/github/size/probil/vue-prevent-unload/dist/vue-prevent-unload.min.js.svg)](https://raw.githubusercontent.com/probil/vue-prevent-unload/master/dist/vue-prevent-unload.min.js)
[![npm](https://img.shields.io/npm/dm/vue-prevent-unload.svg)](https://www.npmjs.com/package/vue-prevent-unload)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/probil/v-mask/master/LICENSE)
[![Vue2](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Vue component that conditionaly prevents page leave/reload

## :art: Playground on the Web

- https://jsfiddle.net/probil/fhmne57w/

## :cd: Installation

This version requires Vue 2.X.
```sh
npm install vue-prevent-unload
```

## :rocket: Usage

```html
<template>
  <PreventUnload :when="hasChanges"/>
</template>
<script>
  import PreventUnload from 'vue-prevent-unload';
  export default {
    data() {
      return {
        hasChanges: true,
      }
    },
    components: {
      PreventUnload,
    }
  }
</script>
```

## :syringe: Tests

In TODO

## :anchor: Semantic Versioning Policy

This plugin follows [semantic versioning](http://semver.org/).

## :newspaper: Changelog

We're using [GitHub Releases](https://github.com/probil/vue-prevent-unload/releases).

## :beers: Contributing

We're more than happy to see potential contributions, so don't hesitate. If you have any suggestions, ideas or problems feel free to add new [issue](https://github.com/probil/vue-prevent-unload/issues), but first please make sure your question does not repeat previous ones.

**Notice:** Don't try to edit files from `dist` as it compiled from `src` by babel and shouldn't be changed manually.

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
