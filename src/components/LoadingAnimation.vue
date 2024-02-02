<template>
  <body>
    <div class="loader">
      <div class="loader__container">
        <div class="loader__film">
          <img
            class="loader__film-img"
            src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
            alt=""
          />
          <img
            class="loader__film-img"
            src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
            alt=""
          />
        </div>
        <img
          class="loader__camera"
          src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1"
          alt=""
        />
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.loader {
  display: flex;
  justify-content: center;
}

.loader__container {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
}

.loader__film {
  position: absolute;
  top: -30px;
  left: 0;
  display: flex;
}

.loader__film-img {
  animation: rotate 1.5s linear infinite;
}
</style>
