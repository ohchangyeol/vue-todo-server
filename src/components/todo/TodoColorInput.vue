<script setup>
    import { ref ,watch} from "vue";

    const _color = ref("#2D2D2D");
    const menu = ref(false)

    const emit = defineEmits(['emitColor']);

    function swatchStyle () {
      return {
        backgroundColor: _color.value,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu.value ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    }

    watch( ()=> _color.value , (newColor)=>{ 
        // console.log(newColor)
        emit('emitColor',newColor);
    },{ immediate: true })

</script>
<!-- ========= template start ========= -->
<template>
    <v-text-field
        v-model="_color"
        label="Color Pick!"
        v-bind="props" 
        variant="solo">
        <template v-slot:append-inner>
            <v-menu 
            v-model="menu"
            :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <div :style="swatchStyle()" v-bind="props"></div>
                </template>
                <v-color-picker 
                    v-model="_color"
                    hide-inputs 
                    dot-size="15"
                    mode ="hex"
                    @dblclick="menu =!menu"
                ><v-btn>dd</v-btn></v-color-picker>
            </v-menu>
        </template>
    </v-text-field>
</template>