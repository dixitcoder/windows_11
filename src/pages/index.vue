<template>
  <Transition @click="toggle">
    <div v-if="show" class="login">
      <br /><br /><br /><br /><br />
      <v-card class="text-center text-caption" style="" variant="outline">
        <h1 class="time">{{ currentTime }}</h1>
        <h2 class="date">{{ formattedDate }}</h2>
      </v-card>
      <v-footer height="20" app>
    <!-- <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a> -->

    <div

      style="position: absolute; right: 16px;"
    >
   <div icon >
    <v-icon color="white"  icon="mdi-wifi"></v-icon> <span style="padding:0.5pc"></span>

    <v-icon color="white" icon="mdi-battery-charging-70"></v-icon>
    <br><br><br><br>
   </div>
   <br><br>
    </div>
  </v-footer>
    </div>
    <div v-else class="login">
      <br /><br /><br /><br /><br />
      <div style="padding-top:4pc"></div>
      <v-card  class="text-center text-caption" style="" variant="outline">
        <v-avatar image="/home/dixitcoder/Desktop/DixitCoder_Project/windows_11/src/assets/photo-1620121692029-d088224ddc74.avif" size="180"></v-avatar>

      </v-card>
      <div  class="text-center text-caption" style="" variant="outline">
        <br>
        <h2 style="font-size:xx-large;color:white">DixitCoder</h2>
        <br>
      <v-btn @click="login()" color="secondary">sign in</v-btn>

      </div>
      <v-footer height="20" app>


    <div

      style="position: absolute; right: 16px;"
    >
   <div  >

    <v-btn variant="tonal" color="white" @click="namedixit()" icon="mdi-wifi"></v-btn><span style="padding:0.5pc"></span>
    <v-btn color="white" icon="mdi-instagram"> </v-btn><span style="padding:0.5pc"></span>
    <v-btn color="white"  icon="mdi-power"></v-btn>

    <br><br><br><br>
   </div>
   <br><br>
    </div>
  </v-footer>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      currentTime: "",
      getDay: "",
      currentDate: new Date(),
    };
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  computed: {
    formattedDate() {
      return this.currentDate
        .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
        .replace(/,/g, "");
    },
  },
  methods: {
    login(){

    },
    namedixit(){
      alert('4000')
    },
    toggle(){
      this.show = false
    },
    togglereturn(){
      this.show = true
    location.reload()
    },
    updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const hour12 = hours % 12 || 12;
      this.currentTime = `${hour12}:${minutes} `;
      this.getDay = now;
      // console.log(now);
      console.log(`${ampm}`);
    },
  },
};
</script>
<style scoped>
.login {
  background-image: url("../assets/photo-1620121692029-d088224ddc74.avif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  height: 55.5pc;
}
.time {
  font-size: 80px;
  color: white;
}
.date {
  font: 70px;
  color: white;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
