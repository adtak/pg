const fetcher = async (url: string) => {
  await sleep(1000);
  const response = await fetch(url);
  return response.json();
};

const sleep = (ms: number) => {
  return new Promise((handler) => setTimeout(handler, ms));
};

export { fetcher };
