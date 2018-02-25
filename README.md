# 🚪 Vue prevent unload

> Vue component that conditionaly prevents page leave/reload

## :art: Playground on the Web

In TODO

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
