export function loadPolyfills() {
  const polyfills = [];

  if (!supportsIntersectionObserver()) {
    polyfills.push(import('intersection-observer'));
  }

  return Promise.all(polyfills);
}

function supportsIntersectionObserver() {
  return (
    'IntersectionObserver' in global &&
    'IntersectionObserverEntry' in global &&
    'intersectionRatio' in IntersectionObserverEntry.prototype
  );
}
