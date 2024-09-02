const fetcher = async (url: string) => {
  await new Promise((handler) => setTimeout(handler, 1000));
  const response = await fetch(url);
  return response.json();
};

export { fetcher };
