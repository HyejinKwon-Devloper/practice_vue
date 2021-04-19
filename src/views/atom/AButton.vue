<template>
    <v-btn
        :depressed="depressed"
        :elevation="elevation"
        :icon="icon"
        :outlined="outlined"
        :plain="plain"
        :color="color"
        @click="handleBtn"
        :left="true"
        :small="small"
        :max-height="maxHeight"
        :max-width="maxWidth"
        :min-height="minHeight"
        :min-width="minWidth"
    >
        {{ btnText }}
        <v-icon v-show="!!iconShape">{{ iconShape }}</v-icon>
    </v-btn>
</template>
<script>
export default {
    props: {
        elevation: {type: Number},
        depressed: {type: Boolean},
        icon: {type: Boolean},
        iconShape: {type: String},
        outlined : {type: Boolean},
        plain: {type: Boolean},
        color: {type: String},
        type: {type: String},
        btnText: {type: String},
        left: {type: Boolean},
        text: {type: Boolean},
        align: {type: String },
        shape: {type: String},
        small: {type: Boolean},
        maxWidth: String,
        maxHeight: String,
        minWidth: String,
        minHeight: String
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