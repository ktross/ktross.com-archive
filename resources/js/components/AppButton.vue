<template>
    <a v-if="type == 'anchor'" :href="to" :class="getButtonClass" v-bind="$attrs">
        <i v-if="icon !== false" :class="getIconClass"></i> <slot></slot>
    </a>
    <button v-else :type="type" :class="getButtonClass" v-bind="$attrs">
        <i v-if="icon !== false" :class="getIconClass"></i> <slot></slot>
    </button>
</template>

<style lang="scss">
@import '../../sass/variables';
a.btn, button.btn {
    font-size: 0.9rem;
    white-space: nowrap;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    background: #fff;
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .025em;
    color: #6772e5;
    text-decoration: none;
    transition: all .15s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    &.primary {
        background: $primary;
        color: contrast-color($primary);
    }
    &.secondary {
        background: $secondary;
        color: contrast-color($secondary);
    }
    &.success {
        background: $success;
        color: contrast-color($success);
    }
    &.danger {
        background: $danger;
        color: contrast-color($danger);
    }
    &.warning {
        background: $warning;
        color: contrast-color($warning);
    }
    &.info {
        background: $info;
        color: contrast-color($info);
    }
    &.light {
        background: $light;
        color: contrast-color($light);
    }
    &.dark {
        background: $dark;
        color: contrast-color($dark);
    }
    &[disabled] {
        cursor: not-allowed;
        pointer-events: none;
        background: $light;
        color: contrast-color($light);
        opacity:0.66;
    }

}
</style>


<script>
export default {
    props: {
        to: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false,
            default: 'anchor',
            validator: function(value) {
                const list = [
                    'anchor',
                    'button',
                    'reset',
                    'submit'
                ]
                return list.indexOf(value) !== -1
            }
        },
        skin: {
            type: String,
            required: false,
            default: 'secondary',
            validator: function(value) {
                const list = [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    'link'
                ]
                return list.indexOf(value) !== -1
            }
        },
        icon: {
            type: String,
            required: false
        }
    },
    computed: {
        getButtonClass: function() {
            return ['btn', this.skin]
        },
        getIconClass: function() {
            return ['fas', 'fa-'+this.icon]
        }
    }
}
</script>