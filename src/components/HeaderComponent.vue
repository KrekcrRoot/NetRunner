<script lang="ts">
import {useUserStore} from "../store/UserStore.ts";
import ButtonComponent from "./header/ButtonComponent.vue";

export default {
  name: 'HeaderComponent',
  components: {ButtonComponent},
  setup() {
    return {
      user: useUserStore(),
    }
  },
  data() {
    return {
      link: 'http://localhost:8180/realms/netrunner-realm/protocol/openid-connect/auth?response_type=code&client_id=netrunner-courses-client&state=sidyuf8s67dfisdgf&scope=openid profile&redirect_uri=http://localhost:5173/auth&code_challenge=UKdJz9LRT0J9iE6nnm3fVC9CeykpV09Yk4ykqSyk3rI&code_challenge_method=S256',
    }
  },
}
</script>

<template>
  <header>

    <a href="#" class="header__telegram">
      <img src="/assets/telegram.png" alt="">
    </a>

    <div class="header__buttons">
      <ul>
        <button-component link="/">Главная</button-component>
        <slot></slot>
      </ul>
    </div>

    <template v-if="user.isLogged && user.roles.includes('admin')">
      <a href="/admin/panelAccess" class="header__btn header__submit header__admin">
        Админ
      </a>
    </template>
    <template v-else-if="user.isLogged">
      <a href="/courses" class="header__btn header__submit">
        {{ user.email }}
      </a>
    </template>
    <template v-else>
      <a :href="link" class="header__btn header__submit">
        Войти
      </a>
    </template>



  </header>
</template>

<style scoped lang="scss">
header {
  padding: 1rem 6rem;
  display: flex;
  height: 10vh;
  background: rgba(0, 0, 0, 0.63);
  justify-content: space-between;
  border-radius: 0 0 16px 16px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;

  .header__telegram {
    height: 90%;
    transition: all 0.2s ease;

    img {
      height: 100%;
      width: auto;
    }

    &:hover {
      transform: scale(1.3);
    }
  }

  .header__buttons {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      gap: 4rem;
    }
  }

  .header__btn {
    outline: none;
    border-radius: 15px;
    border: 3px solid #000;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 5rem;
    transition: all 0.15s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__submit {
    color: #dcffbf;
    background: rgba(144, 205, 97, 0.70);

    &:hover {
      background: rgba(140, 199, 94, 0.9);
    }
  }

  .header__admin {
    color: white;
    background: #CDC261B2;
  }
}
</style>