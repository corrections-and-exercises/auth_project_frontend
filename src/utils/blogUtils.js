export async function createEntry(formState) {
  try {
    const res = await fetch(`${import.meta.env.VITE_URL_API}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error);
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getEntries(url) {
  console.log("url", url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const { error } = res.json();
      throw new Error(error);
    }
    const data = await res.json();
    console.log({ data });
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getSingleEntry(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_URL_API}/blog/${id}`);
    if (!res.ok) {
      const { error } = res.json();
      throw new Error(error);
    }
    const data = await res.json();
    console.log({ data });
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}