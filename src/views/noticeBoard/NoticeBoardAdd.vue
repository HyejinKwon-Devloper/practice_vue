<template>
<v-card flat outlined rounded="lg">
    <v-card-title>
          공지사항 등록
    </v-card-title>
    <v-card-text>
        <v-form
            ref="form"
            lazy-validation
        >
            <v-text-field
                counter="300"
                label="Title"
                :rules="nameRules"
                required
            >
            </v-text-field>
            <v-textarea
                counter="1000"
                label="공지내용"
                :rules="rules"
                :value="value"
                  required
            >   
            </v-textarea>
            <v-flex text-left> 
                <AButton text-left btnText='Submit' :outlined="true" type="button" class="mr-5"/>
                <AButton text-left btnText='Close' :outlined="true" type="button"/>
            </v-flex>
        </v-form>
    </v-card-text>
</v-card>
</template>

<script>
import AButton from '@/views/atom/AButton'
export default {
    components: {AButton},
    data: () => ({
      rules: [v => v.length <= 25 || 'Max 25 characters'],
    nameRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 300) || 'Title must be less than 300 characters',
      ],
      value: 'Hello!',
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
}
</script>