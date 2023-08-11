<script lang="ts">
export default {
  name: 'HeaderComponent',
}
</script>

<template>
  <header>

    <a href="#" class="header__telegram">
      <img src="/assets/telegram.png" alt="">
    </a>

    <div class="header__buttons">
      <ul>
        <slot></slot>
      </ul>
    </div>

    <button class="header__btn header__submit">Войти</button>

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
  }

  .header__submit {
    color: #dcffbf;
    background: rgba(144, 205, 97, 0.70);

    &:hover {
      background: rgba(140, 199, 94, 0.9);
    }
  }
}
</style>