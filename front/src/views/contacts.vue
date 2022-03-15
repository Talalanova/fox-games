<template>
  <div class="contacts">    
    <h1>Контакты</h1>
    <hr>
    <div class="contacts__frame">
      <div class="contacts__info">
        <a class="contacts__phone" href="tel:+74232661414">+7(423)266-14-14</a>
        <span class="contacts__worktime">с 10:00 до 19:00</span>
        <span class="contacts__adress">улица Гоголя, 39А, Владивосток</span>
        <form method="post" name="feedback">
          <p>Обратная связь</p>
          <input v-model="name" name="name" type="text" placeholder="*Имя" required/>
          <input v-model="phone" name="phone" type="tel" placeholder="*Номер" required/>
          <textarea v-model="message" name="message" placeholder="Комментарий" required></textarea>
          <button type="submit" @click.prevent="addFeedback">{{ buttonText }}</button>
        </form>
      </div>
      <div class="contacts__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.4932560840555!2d131.90289118261148!3d43.12525428257137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb391828dd66b61%3A0xd974554b32a68d90!2z0JvQuNGB0YzRjyDQndC-0YDQsA!5e0!3m2!1sru!2sru!4v1645080909644!5m2!1sru!2sru" width="100%" height="456" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
    <div class="error" v-if="error">
      <div class="overlay" @click.self="error = !error">
        <img src="@/assets/fox-error.svg" width="512" height="450">
        <h1>Что-то пошло не так. Попробуйте перезагрузить страницу или вернуться позже</h1>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Contacts',
  data() {
    return {
      message: '',
      phone: '',
      name: '',
      buttonText: 'Отправить',
      error:  false
    }
  },
  methods: {
    addFeedback() {
      let formData = new FormData(document.forms.feedback)
      fetch('https://api.foxhole.club/api/feedback/',{
        method: 'POST',
        body: formData
      })
      .then((response) => {
        if (response.ok) {
          this.phone = ''
          this.name = ''
          this.message = ''
          this.buttonText = 'Отправлено!'
        } else {
          this.error = true
        }        
      })
      .catch(() => {
        this.error = true
      })
    },
  }
}
</script>

<style scoped>

.contacts {
  padding: 40px 10px;
  position: relative;
}

.contacts__frame {
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

.contacts__map {
  border: 1px solid #CB7D49;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
}

.contacts__map::before {
  position: absolute;
  content: "";
  width: 142px;
  height: 30px;
  background-image: url('~@/assets/sidemenu_green.svg');
  background-repeat: no-repeat;
  background-size: 142px, 30px;
  bottom: 0;
  left: 0;
}

.contacts__info {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 24px;
  line-height: 25px;
  text-align: left;
  color: #4B0101;
}

.contacts__info form {
  position: relative;
  font-family: "Nunito", "Arial", sans-serif;
}

.contacts__phone {
  color: #4B0101;
}

.contacts__phone,
.contacts__worktime,
.contacts__adress {
  position: relative;
  padding-left: 55px;
}

.contacts__phone::before,
.contacts__worktime::before,
.contacts__adress::before {
  position: absolute;
  left: 0;
  bottom: 1px;
  content: "";
  width: 30px;
  height: 32px;
  background-repeat: no-repeat;
}

.contacts__phone::before {
  background-image: url('~@/assets/icon_tel.png');
}

.contacts__worktime::before {
  background-image: url('~@/assets/icon_watch.png');
}

.contacts__adress::before {
  background-image: url('~@/assets/icon_geo.png');
  left: 5px;
  bottom: 0;
}

.contacts__info input,
.contacts__info textarea {
  border: 1px solid #CB7D49;
  border-radius: 10px;
  padding: 8px 10px;
  max-width: 500px;
  width: 100%;
  margin: 10px 0;
  font-size: 16px;
  resize: none;
}

.contacts__info button {
  padding: 4px 20px;
  background-color: #CB7D49;
  border: 1px solid #CB7D49;
  color: white;
  font-family: "Nunito", "Arial", sans-serif;
  font-size: 21px;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: auto;
  transition: 0.7s;
  position: absolute;
  bottom: -22px;
  right: 32px;
}

.contacts__info button:hover {
  color: #4B0101;
  border: 1px solid #CB7D49;
  background-color: white;
}

@media (max-width: 568px) {
  .contacts__frame {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }

  .contacts__info {
    font-size: 18px;
  }
}
</style>