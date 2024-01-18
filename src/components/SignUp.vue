<script setup>
  import pic from '@/assets/img/mokoko.png'
  import { ref , computed } from 'vue';
  
  const errorMessages = ref('');
  const formHasErrors = ref(false);

  const email = ref('');
  const password = ref('');
  const againPassword = ref('');
  const name = ref('');

  const form = computed(()=>{
    return {
          refName: name.value,
          refPassword: password.value,
          refAgainPassword: againPassword.value,
          refName: name.value,
        }
  })

  function addressCheck () {
    errorMessages = password.value && !name
      ? `Hey! I'm required`
      : ''

    return true
  }

  // function submit () {
  //   formHasErrors.value = false

  //   Object.keys(form.value).forEach(f => {
  //     if (!form[f]) formHasErrors.value = true
  //     $refs[f].validate(true)
  //   })
  // }

  // watch: {
  //     name () {
  //       this.errorMessages = ''
  //     },
  //   },
  
</script>


<template>
    <v-row justify="center">
      <v-col>
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
            ref="form"
            max-width="448"
            rounded="lg"
            elevation="8">
            <v-text-field
              label="Account"
              placeholder="Email address"
              ref="refEmail"
              v-model="email"
              prepend-inner-icon="mdi-email-outline"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              placeholder="Enter your password"
              ref="refPassword"
              v-model="password"
              prepend-inner-icon="mdi-lock-outline"
              :rules="[
                () => !!address || 'This field is required',
                addressCheck
              ]"
              required
            ></v-text-field>
            <v-text-field              
              label="Password again"
              placeholder="Enter your password again"
              ref="refAgainPassword"
              v-model="againPassword"
              prepend-inner-icon="mdi-lock-outline"
              :rules="[() => !!city || 'This field is required', addressCheck]"
              required
            ></v-text-field>
            <v-text-field
              label="Name"  
              placeholder="Your Name"
              ref="refName"
              v-model="name"
              prepend-inner-icon="mdi-account-outline"
              :rules="[() => !!state || 'This field is required']"
              required
            ></v-text-field>
            
            
          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-btn variant="text">
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                v-if="formHasErrors"
                location="left"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
              color="primary"
              variant="text"
              @click="submit"
            >
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>