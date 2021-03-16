<template>
    <div>
        <Toolbar/>
        <v-card>
            <Form/>
        </v-card>
        <Footer/>
    </div>
</template>

<script>
import Toolbar from "@/components/Toolbar"
import Form  from "@/components/Form";
import Footer from "@/components/Footer"
export default {
    components: {
        Toolbar,
        Form,
        Footer
    }
}
</script>
