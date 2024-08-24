<template>
  <div class="image-container" ref="imageContainer">
    <img
      :src="imageSrc"
      alt="Hotspot Image"
      class="image"
      @click="handleClick($event)"
    />
    <div
      v-for="(hotspot, index) in hotspots"
      class="hotspot"
      :key="index"
      :style="{ top: hotspot.top, left: hotspot.left }"
      :data-action="hotspot.action"
      @click="performAction(hotspot.action, index)"
    >
      <span :data-action="hotspot.label"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageHotspots",
  props: {
    src: String,
  },
  data() {
    return {
      imageSrc: this.src,
      isZoomIn: false,
      hotspots: [
        {
          top: "20%",
          left: "30%",
          action: "showMessage",
          label: "Show Message",
        },
        { top: "50%", left: "50%", action: "toggleZoom", label: "Zoom In" },
        { top: "70%", left: "20%", action: "navigateToView", label: "Go Back" },
        { top: "80%", left: "60%", action: "showForm", label: "Show Form" },
        { top: "40%", left: "80%", action: "showAlert", label: "Show Alert" },
      ],
    };
  },

  methods: {
    performAction(action, index) {
      switch (action) {
        case "showMessage":
          alert("Hello!");
          break;
        case "toggleZoom":
          this.toggleZoom(index);
          break;
        case "navigateToView":
          // this.$router.push({ name: "AnotherView" });
          this.$router.go(-1);
          break;
        case "showForm":
          // Implement form display logic here
          break;
        case "showAlert":
          alert("You clicked a hotspot!");
          break;
        default:
          console.log("Unknown action");
      }
    },

    toggleZoom(index) {
      if (this.isZoomedIn) {
        this.zoomOut();
        this.hotspots[index].label = "Zoom In";
      } else {
        this.zoomIn();
        this.hotspots[index].label = "Zoom Out";
      }
      this.isZoomedIn = !this.isZoomedIn;
    },
    zoomIn() {
      this.$refs.imageContainer.style.transform = "scale(1.5)";
      this.$refs.imageContainer.style.transition = "transform 0.3s ease-in-out";
    },
    zoomOut() {
      this.$refs.imageContainer.style.transform = "scale(1)";
      this.$refs.imageContainer.style.transition = "transform 0.3s ease-in-out";
    },
    handleClick(event) {
      console.log("Image clicked at:", event.clientX, event.clientY);
    },
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}
.image {
  width: 100%;
  height: auto;
}

.hotspot {
  z-index: 2;
  position: absolute;
  display: block;

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8em;
    height: 1.8em;
    background: #cf00f1;
    border-radius: 50%;
    animation: pulse 3s ease infinite;
    transition: background 0.3s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    &:after {
      content: attr(data-action);
      position: absolute;
      bottom: 130%;
      left: 50%;
      color: white;
      text-shadow: 0 1px black;
      font-weight: 400;
      font-size: 20px;
      opacity: 0;
      transform: translate(-50%, 10%) scale(0.5);
      transition: all 0.25s;
    }
  }

  svg {
    opacity: 0;
    color: #cf00f1;
    font-size: 1.4em;
    transition: opacity 0.2s;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
    box-sizing: border-box;
  }

  &:before {
    z-index: -1;
    border: 0.15em solid #ffffff88;
    opacity: 0;
    transform: scale(2);
    transition:
      transform 0.25s,
      opacity 0.2s;
  }

  &:after {
    z-index: -2;
    background: #fff;
    animation: wave 3s linear infinite;
  }

  &:hover {
    span {
      animation: none;
      background: #fff;

      &:after {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
      }
    }

    svg {
      opacity: 1;
    }

    &:before {
      opacity: 1;
      transform: scale(1.5);
      animation: borderColor 2s linear infinite;
    }
    &:after {
      animation: none;
      opacity: 0;
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes borderColor {
  0% {
    border-color: #fff;
  }
  50% {
    border-color: #cf00f1;
  }
  100% {
    border-color: #fff;
  }
}

@keyframes wave {
  0% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.hotspot-marker {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.8);
}
</style>
