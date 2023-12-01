export const useTimer = (callback: () => void, time: number) => {
  const timerId = ref<NodeJS.Timeout>();

  onMounted(() => {
    if (!timerId.value) {
      timerId.value = setTimeout(() => {
        callback();
      }, time);
    }
  });

  onUnmounted(() => {
    if (timerId.value) {
      clearTimeout(timerId.value);
    }
  });
};
