export const formateDate = (data, config) => {
  const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
  const option = config ? config : defaultOptions;

  return new Date(data).toLocaleDateString("en-US", option);
};
