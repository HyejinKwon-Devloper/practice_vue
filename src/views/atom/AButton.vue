<template>
    <v-btn
    :depressed="depressed"
    :elevation="elevation"
    :icon="icon"
    :outlined="outlined"
    :plain="plain"
    :color="color"
    @click="handleBtn"
    type
    :left="align"
    :text="text"
    >
        {{ btnText }}
    </v-btn>
</template>
<script>
export default {
    props: {
        elevation: {type: Number},
        depressed: {type: Boolean},
        icon: {type: Boolean},
        outlined : {type: Boolean},
        plain: {type: Boolean},
        color: {type: String},
        type: {type: String},
        btnText: {type: String},
        left: {type: Boolean},
        text: {type: Boolean},
        align: {type: String }
    },
    methods: {
        handleBtn: function(){
            this.$emit('btnAction')
        }
    }
}
</script>
<style lang="sass">

</style>