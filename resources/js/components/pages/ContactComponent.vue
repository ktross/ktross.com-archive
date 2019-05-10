<template>
    <div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8 py-5">
                    <div class="card">
                        <h1>Get in touch</h1>
                        <p class="large">This is some placeholder text</p>
                        <form v-on:submit.prevent="submitForm">
                        <div class="row">
                            <div v-if="Object.keys(errors).length > 0" class="col">
                                <ul class="unstyled">
                                    <li v-bind:key="key" v-for="(value, key) in errors" class="error">Error: {{ value[0] }}</li>
                                </ul>
                            </div>
                            <div v-if="this.success === true" class="col">
                                <p class="success">Your message has been sent.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" name="name" placeholder="Your Name" v-model="formData.name" required :disabled="disabled">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" name="company_name" placeholder="Company Name" v-model="formData.company_name" :disabled="disabled">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" name="email" placeholder="Email" v-model="formData.email" :disabled="disabled">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <textarea name="message" placeholder="Your Message" v-model="formData.message" :disabled="disabled"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <app-button skin="primary" type="submit" @click="submitForm" :disabled="disabled">Send Message</app-button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4 px-5">
                    <h1>Or...</h1>
                    <h3>Send an Email</h3>
                    <p><a :href="'mailto:'+contact.email">{{ contact.email }}</a></p>
                    <h3>Leave a Voicemail</h3>
                    <p><a :href="'tel:'+contact.phone">{{ contact.phone }}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                contact: {
                    email: process.env.MIX_CONTACT_EMAIL,
                    phone: process.env.MIX_CONTACT_PHONE
                },
                formData: {
                    name: null,
                    company_name: null,
                    email: null,
                    message: null
                },
                disabled: false,
                success: false,
                errors: {}
            }
        },
        methods: {
            submitForm: function() {
                this.disabled = true
                this.errors = {}
                this.axios.post('contact', this.formData)
                    .then((response) => {
                        this.success = true
                    })
                    .catch((error) => {
                        this.disabled = false
                        this.errors = (error.response.status == '422') ? error.response.data.errors : {unknown: ['An unknown error has occurred.']}
                        console.log(this.errors)
                    })
            }
        }
    }
</script>
