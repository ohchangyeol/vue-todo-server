<script setup>
  import pic from '@/assets/img/mokoko.png'
import { fromUnixTime } from 'date-fns';
import { onMounted } from 'vue';
  import { ref , computed, reactive } from 'vue';
  
  const errorMessages = ref('');
  const formHasErrors = ref(false);

  const email = ref('');
  const password = ref('');
  const againPassword = ref('');
  const name = ref('');

  const form = computed(()=>{
    return {
      refEmail: email.value,
      refPassword: password.value,
      refAgainPassword: againPassword.value,
      refName: name.value,
    }
  })

  const formElement = reactive({

  });
    const refEmail = ref();
    const refPassword = ref();
    const refAgainPassword = ref();
    const refName = ref();


  function passwordCheck () {
    errorMessages.value = password.value != againPassword.value
      ? `Password does not match`
      : ''

    return true
  }

  
  function submit (event) {
    formHasErrors.value = false
    // console.log(form.value);
    
    console.log(event)
    // Object.keys(form.value).forEach(f => {
    //   console.log(form[f])
      
    //   if (!form.value[f]) {
    //     formHasErrors.value = true
    //     console.log("?????????????????????????" , form.value[f])
    //   }

    // })
    // if(event.checkValidity){

    // }

    
  }

  const emailRules = [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ];

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
            <v-form validate-on="submit lazy" @submit.prevent="submit">
              <v-text-field
                id = "refEmail"
                label="Account"
                placeholder="Email address"
                ref="refEmail"
                type="email"
                v-model="email"
                prepend-inner-icon="mdi-email-outline"
                :rules="emailRules
                  // () => !!email || 'This field is required' ,
                  // () => !!email && email.indexOf('@') != -1 || 'email should contain @'
                  // ()=> /.+@.+\..+/.test(value) || 'email should contain @'
                "
                required
              ></v-text-field>
              <v-text-field
                id="refPassword"
                label="Password"
                placeholder="Enter your password"
                ref="refPassword"
                type="password"
                v-model="password"
                prepend-inner-icon="mdi-lock-outline"
                :rules="[
                  () => !!password || 'This field is required',
                  () => !!password && password.length > 9 || 'Password must be at least 10 characters long.',
                ]"
                required
              ></v-text-field>
              <v-text-field              
                id="refAgainPassword"
                label="Password again"
                placeholder="Enter your password again"
                ref="refAgainPassword"
                type="password"
                v-model="againPassword"
                prepend-inner-icon="mdi-lock-outline"
                :rules="[() => passwordCheck() ]"
                :error-messages="errorMessages"
                required
              ></v-text-field>
              <v-text-field
                id="refName"
                label="Name"  
                placeholder="Your Name"
                ref="refName"
                v-model="name"
                prepend-inner-icon="mdi-account-outline"
                :rules="[() => !!name || 'This field is required']"
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
                type="submit"
              >
                Create
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </template>