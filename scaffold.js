<template>
  <div class="{{kebabCase name}}">
    {{someOtherValue}}
  </div>
</template>

<script>
  import './index.scss'
  import {attributeHelper} from '../mixins/index'
  export default {
    name: '{{pascalCase name}}',
    props : {
    },
    created(){},
    mounted(){},
    methods: {}
  }
</script>
