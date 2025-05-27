
export const getAdaptiveGridClasses = (itemCount: number) => {
  if (itemCount === 0) {
    return {
      padding: "py-12",
      container: "max-w-3xl mx-auto",
      grid: "grid-cols-1",
      spacing: "gap-6"
    };
  }
  
  if (itemCount === 1) {
    return {
      padding: "py-16",
      container: "max-w-2xl mx-auto",
      grid: "grid-cols-1",
      spacing: "gap-8"
    };
  }
  
  if (itemCount === 2) {
    return {
      padding: "py-18",
      container: "max-w-4xl mx-auto",
      grid: "grid-cols-1 md:grid-cols-2",
      spacing: "gap-8"
    };
  }
  
  if (itemCount === 3) {
    return {
      padding: "py-20",
      container: "max-w-6xl mx-auto",
      grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      spacing: "gap-8"
    };
  }
  
  // 4 or more items
  return {
    padding: "py-20",
    container: "max-w-7xl mx-auto",
    grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    spacing: "gap-6"
  };
};
