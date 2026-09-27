<script setup lang="ts">
const props = withDefaults(defineProps<{text?:string;phone?:string;message?:string;large?:boolean}>(),{text:'Konsultasi via WhatsApp',phone:'6281517281614',message:'Halo Bengkel Bubut Damai, saya ingin konsultasi kebutuhan pengerjaan komponen.',large:false})
const whatsappUrl = computed(() => `https://wa.me/${props.phone}?text=${encodeURIComponent(props.message)}`)
</script><template><a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="button button-gold" :class="{'button-large':large}"><span>{{ text }}</span><span aria-hidden="true">↗</span></a></template>
