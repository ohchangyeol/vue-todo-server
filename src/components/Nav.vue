<script setup>
  import { ref} from 'vue'
  import { useRouter} from 'vue-router'
  // 절대 경로 
  import pic from '@/assets/img/mokoko.png'
  const drawer = ref(null)
  const router = useRouter().getRoutes()
  
  const img = pic;
  
</script>
  

<!-- ========= template start ========= -->
<template>
  <v-navigation-drawer v-model="drawer">
    <v-sheet
      color="grey-lighten-4"
      class="d-flex pa-4 flex-column align-center justify-center">
    <v-avatar
        class="mb-4"
        color="blue-lighten-1"
        size="64">
        <v-img
          :src="pic"
        ></v-img>
      </v-avatar>

      <div>안녕하세요, ㅇㅇㅇ님</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list v-for="(link , i) in router" :key="i">
      <v-list-item
        v-if="i > 1"
        :prepend-icon="link.icon"
        :title="link.name"
        :to= "link.path"
        link
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Todo List 😂</v-app-bar-title>
  </v-app-bar>
</template>
