export const closeOnClickOut = (ref, action) => {
  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      console.table(ref.current);
      action(true);
      console.log('action has been triggered');
    }
  }
  document.addEventListener(
    'mousedown',
    handleClickOutside
  );
  return () => {
    document.removeEventListener(
      'mousedown',
      handleClickOutside
    );
  };
};
