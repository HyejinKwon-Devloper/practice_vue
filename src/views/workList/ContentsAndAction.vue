<template>
     <v-flex>
         <h4>
             {{ title }}
         </h4>
         <v-button flex-row-reverse>
            <v-icon>mdi-chevron-left</v-icon>
         </v-button>            
    </v-flex>

</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>