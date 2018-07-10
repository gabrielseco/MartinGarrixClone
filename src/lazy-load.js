export const lazyLoadImageCallback = (
  entries: IntersectionObserverEntry[],
  observer
) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      entry.target.src = entry.target.dataset.src; // eslint-disable-line
    }
  });
};

export const config = {
  root: document.querySelector('#last-releases'),
  rootMargin: '50px',
  threshold: 0.5
};
