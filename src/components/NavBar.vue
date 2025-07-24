<template>
  <v-navigation-drawer expand-on-hover permanent rail>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        value="home"
        @click="$router.push('/')"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-folder"
        title="My Movies"
        value="favorite"
        @click="$router.push('/my-movies')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
