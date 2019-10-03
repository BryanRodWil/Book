<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 175 175"
    aria-labelledby="logo"
    role="presentation"
  >
    <title id="logo" lang="en">Logo</title>
    <g :fill="color">
      <path class="cls-1" d="M174,80.09a41.35,41.35,0,0,1-44.82-69.26A87.51,87.51,0,0,0,59.5,4.43L75.66,43.07l5,11.9-12.9.14-27.82.3L50.7,81.13l5,11.9-12.9.14L0,93.64a87.26,87.26,0,0,0,174.27-6.47c0-2.38-.1-4.75-.29-7.08M87,107.3a20.13,20.13,0,1,1,20.15-20.13A20.14,20.14,0,0,1,87,107.3">
      </path>
      <path class="cls-1" d="M37.84,81.28,27.06,55.57l-5-11.89L35,43.54l27.82-.31L48.48,9A87.16,87.16,0,0,0,0,81.69Z">
      </path>
      <path class="cls-1" d="M94.87,87.17a7.82,7.82,0,1,1-7.82-7.82,7.82,7.82,0,0,1,7.82,7.82">
      </path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
