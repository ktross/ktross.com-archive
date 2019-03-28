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
                            <div class="col">
                                <input type="text" name="name" placeholder="Your Name" v-model="formData.name" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" name="company_name" placeholder="Company Name" v-model="formData.company_name" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" name="email" placeholder="Email" v-model="formData.email" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" name="phone" placeholder="Phone" v-model="formData.phone" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <textarea name="message" placeholder="Your Message" v-model="formData.message" required></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <app-button skin="primary" type="submit" @click="submitForm">Send Message</app-button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4 px-5">
                    <h1>Or...</h1>
                    <h3>Send an Email</h3>
                    <p>placeholder</p>
                    <h3>Make a Call</h3>
                    <p>placeholder</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: function () {
            return {
                formData: {
                    name: null,
                    company_name: null,
                    email: null,
                    phone: null,
                    message: null
                }
            }
        },
        methods: {
            submitForm: function() {
                this.axios.post('contact', this.formData).then((response) => {
                    // handle errors / success
                })
            }
        }
    }
</script>
