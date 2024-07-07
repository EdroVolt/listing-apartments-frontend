export async function getData(url: string) {
  try {
    const res = await fetch(url, { cache: "no-cache" });
    return res.json();
  } catch (error) {
    console.error(error);
    return {};
  }
}
