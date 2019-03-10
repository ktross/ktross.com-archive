<template>
    <div>
        <div class="row">
            <div class="col-60">
                <div class="card">
                    <h1>Get in touch</h1>
                    <p class="large">This is some placeholder text</p>
                    <div class="row">
                        <input type="text" name="name" placeholder="Your Name">
                    </div>
                    <div class="row">
                        <input type="text" name="company-name" placeholder="Company Name">
                    </div>
                    <div class="row">
                        <textarea name="message" placeholder="Your Message"></textarea>
                    </div>
                    <div class="row">
                        <a href="#" class="btn primary">Send Message</a>
                    </div>
                </div>
            </div>
            <div class="col-10"></div>
            <div class="col-30" style="padding-top:80px;">
                <h1>Or...</h1>
                <h3>Send an Email</h3>
                <p>placeholder</p>
                <h3>Make a Call</h3>
                <p>placeholder</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
