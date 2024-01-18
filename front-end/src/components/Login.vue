<script setup>
    import { ref } from "vue"
    import pic from '@/assets/img/mokoko.png'
    import axios from "axios";

    const visible = ref(false);
    
    const testAxios = async ()=> {
      console.log("test")
      await axios.get("/api/test")
      .then((res)=>{
        console.log("성공", res)
      }).catch((res)=>{
        console.log("실패", res)
      })
    }
</script>

<template>
  <div>
    <v-avatar
        class="mb-4 mx-auto my-6 d-flex"
        color="blue-lighten-1"
        size="100">
        <v-img
        :src="pic"
        ></v-img>
    </v-avatar>
    <v-card
      class="mx-auto pa-12 pb-8"
      max-width="448"
      rounded="lg"
      elevation="8"
    >
      <v-text-field
        label="Account"
        
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="solo"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >

      </div>

      <v-text-field
      label="Password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="solo"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="testAxios"
        >Log In
      </v-btn>

      <v-list-item class="text-center text-blue text-decoration-none" to="/sign-up">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
      </v-list-item>
    </v-card>
  </div>
</template>