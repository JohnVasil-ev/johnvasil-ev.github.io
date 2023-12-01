type Callback = (entry: IntersectionObserverEntry) => void;

export const useScrollReveal = (element: Ref<HTMLElement | null>, callback: Callback, { threshold = 0.5 }: IntersectionObserverInit = {}) => {
  const observerRef = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
          }
        });
      },
      {
        threshold,
      }
    );
    observerRef.value = observer;

    if (element.value) {
      observer.observe(element.value);
    }
  });

  onUnmounted(() => {
    if (element.value && observerRef.value) {
      observerRef.value.disconnect();
    }
  });
};
