import $ from "../core";

$.prototype.get = async function (
  url,
  dataTypeAnswer = json
) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `
        - Что-то пошло не так, не удалось получить fetch( ${url} ), статус: ${res.status}
        - Could not fetch( ${url} ), status: ${res.status}
      `
    );
  }

  switch (dataTypeAnswer) {
    case json:
      return await res.json();
    case text:
      return await res.text();
    case blob:
      return await res.blob();
  }
};

$.prototype.post = async function (
  url,
  data,
  dataTypeAnswer = json
) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(
      `
        - Что-то пошло не так, не удалось получить fetch( ${url} ), статус: ${res.status}
        - Could not fetch( ${url} ), status: ${res.status}
      `
    );
  }

  switch (dataTypeAnswer) {
    case json:
      return await res.json(JSON.parse(data));
    case text:
      return await res.text();
    case blob:
      return await res.blob();
  }
};
