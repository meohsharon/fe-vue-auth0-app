<template>
  <div class="snap-x flex item-center pb-12">
    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/avatars/1.jpg"
        alt="1"
        @click="handleLogin(1)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/avatars/2.jpg"
        alt="2"
        @click="handleLogin(2)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/avatars/3.jpg"
        alt="3"
        @click="handleLogin(3)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/avatars/4.jpg"
        alt="4"
        @click="handleLogin(4)"
      />
    </div>

    <div class="justify-between rounded p-4">
      <img
        class="inline-block w-64 rounded-full"
        src="@assets/avatars/5.jpg"
        alt="5"
        @click="handleLogin(5)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const getAvatarUrl = (index: number) => {
  if (index === 1) {
    return "https://private-user-images.githubusercontent.com/28490858/356844955-a114b0d3-d159-47e9-88af-69c9c75e9022.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMzNDI4NzgsIm5iZiI6MTcyMzM0MjU3OCwicGF0aCI6Ii8yODQ5MDg1OC8zNTY4NDQ5NTUtYTExNGIwZDMtZDE1OS00N2U5LTg4YWYtNjljOWM3NWU5MDIyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDAyMTYxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNlMDU1NWQyYzY0OTdlMDdjZTBiNzljMzE3NmZkMjhhMGY3MzYyNzUyMDRlNDcyMDhjMmQ2OWFmMWMyZGIzYjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rxKWhTYvB_hv3_Fr3UKv6e-LMgTTd5bLNV3cjWLdwF0";
  } else if (index === 2) {
    return "https://private-user-images.githubusercontent.com/28490858/356844957-19c79550-893c-4d5e-9515-c02d185622fd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMzNDM2MjIsIm5iZiI6MTcyMzM0MzMyMiwicGF0aCI6Ii8yODQ5MDg1OC8zNTY4NDQ5NTctMTljNzk1NTAtODkzYy00ZDVlLTk1MTUtYzAyZDE4NTYyMmZkLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDAyMjg0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk4ODMzNDA2ZDViMzY1YjY3ODZkMGY3YjA4NWIyYzllMGQ4YWNiMGQzZDU0YmY1NmRlYzgzMjJjOTBhNjQwYTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-16sbZKABXMn4-OayDFDvkTcaL3JP636iGMpQBfD7yk";
  } else if (index === 3) {
    return "https://private-user-images.githubusercontent.com/28490858/356844958-237c131e-82fc-4d0f-b4fd-5707aeb57463.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMzNDM5NjksIm5iZiI6MTcyMzM0MzY2OSwicGF0aCI6Ii8yODQ5MDg1OC8zNTY4NDQ5NTgtMjM3YzEzMWUtODJmYy00ZDBmLWI0ZmQtNTcwN2FlYjU3NDYzLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDAyMzQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRmNmQ1MzMyM2VjNmNiYTE2ZDMwMDM5MmVmMzQxNTQ5OGQzZTcyZmFlZThkMGEyNDcyN2JmMDU2YTA2NmFmOWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.O2n4kOLdQVwMxHc5Ei0_YbWN2FZM09SPRcU-CgBLaLQ";
  } else if (index === 4) {
    return "https://private-user-images.githubusercontent.com/28490858/356844959-b91e932d-6c7b-418d-bde2-252aa73780ec.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMzNDM5NjksIm5iZiI6MTcyMzM0MzY2OSwicGF0aCI6Ii8yODQ5MDg1OC8zNTY4NDQ5NTktYjkxZTkzMmQtNmM3Yi00MThkLWJkZTItMjUyYWE3Mzc4MGVjLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDAyMzQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhZTVhZmZhNDE0MjUwNjZhNzg5MmY1NzQ5ZWEyNDQxYTBjM2NmNDdiODc4NWNiN2NlYWE3NzdjMzMzZjU0NjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Tq_u88S97biczHUEX1cZbfo5YiQ_WGZyk5hKMdg0QTQ";
  } else if (index === 5) {
    return "https://private-user-images.githubusercontent.com/28490858/356844960-90f7dfc4-7213-430b-b516-6abd8177507a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMzNDM5NjksIm5iZiI6MTcyMzM0MzY2OSwicGF0aCI6Ii8yODQ5MDg1OC8zNTY4NDQ5NjAtOTBmN2RmYzQtNzIxMy00MzBiLWI1MTYtNmFiZDgxNzc1MDdhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODExVDAyMzQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzNmFkZjk0ODUzM2UxY2FlYjE4NjE0NTRiNTFiZGM4YzkzYzEwNDYxNDJhNTM1MmJkZjA4MTg2ZTNjODY3YzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.MDkiutWzxuHCXVe9lZsWsvLul3ow4t5HK1eOZ5Q10t8";
  }
};

const handleLogin = (avatar_index: number) => {
  console.log({ avatar_index });
  loginWithRedirect({
    appState: {
      target: "/home",
    },
    authorizationParams: {
      prompt: "login",
      avatar: getAvatarUrl(avatar_index),
    },
  });
};
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
