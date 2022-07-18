export const isInCart = (state, id) => {
    const result = !!state.items.find((item) => item.id === id);
    return result;
  };