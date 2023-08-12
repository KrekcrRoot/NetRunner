<script lang="ts">

import DefaultHeaderComponent from "../components/header/DefaultHeaderComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  name: 'ProductsPage',
  components: {DefaultHeaderComponent, HeaderComponent},
}

</script>

<template>
  <header-component>
    <default-header-component />
  </header-component>
  <main>
    <div class="container">
      <h1>Наши продукты</h1>

      <section>
        <h2>Онлайн <br />образование</h2>

        <p>
          Наша компания предоставляет онлайн курсы по многим направлениям в сфере информационной безопастности. Начиная от базовых знаний которые помогут вам продвинуться в ИБ, заканчивая топовыми курсами разработанными совместно с нашими парнерами.
          <br /><br />
          С доступными на данный момент курсами вы можете ознакомится по кнопке.
        </p>

        <a href="/courses" class="btn">Перейти к курсам</a>
      </section>

      <section>
        <h2>B2B НАПРАВЛЕНИЕ</h2>
        <p>
          Компания предоставляет широкий спектр услуг для малого и
          среднего бизнеса:
          Развёртование корпоративной сети под ключ
          Создание корпоративной инфраструктуры
          Аудит безопасности
          Создание и поддержка защищённых хранилищ под ключ
          Обучение RedTeam команды
          Проведение PenTest
          Программы корпоративного обучения
          Для получения комерческого предложения пожалуйста
          свяжитесь с нами.
        </p>

        <a href="" class="btn">Контакты</a>
      </section>

      <section>
        <h2>ОФФЛАЙН ПРОЕКТ</h2>

        <p>Так как наша задача - популяризация ИБ, мы организовываем кружки на базе школ для детей.</p>

        <a href="/sign" class="btn">Учителям / ученикам</a>
      </section>

    </div>
  </main>
</template>

<style scoped lang="scss">

main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {

    h1 {
      font-size: 3rem;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 2rem;
    }

    section {
      width: 60%;
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 10px;
      transition: all 0.2s ease;
      margin-bottom: 3rem;

      &:hover {
        background: rgba(255, 255, 255, 0.07);
      }

      h2 {
        text-transform: uppercase;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.7rem;
        font-weight: 300;
      }

      .btn {
        margin: 2rem 0 0;
        text-transform: none;
      }

    }
  }
}

</style>