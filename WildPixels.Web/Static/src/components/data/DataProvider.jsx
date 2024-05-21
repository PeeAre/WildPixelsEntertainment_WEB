const apiUrl = "https://localhost:5001";

export const DataProvider = {
  // getList: async (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify(params.filter),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   try {
  //     const response = await fetch(url);
  //     return response;
  //   } catch (error) {
  //     console.error("Fetch is failed", error);
  //   }

  //   return fetch(url).then(({ headers, json }) => ({
  //     data: json,
  //     total: parseInt(
  //       (headers.get("content-range") || "0").split("/").pop() || "0",
  //       10
  //     ),
  //   }));
  // },

  // getOne: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
  //     data: json,
  //   })),

  // getMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;
  //   return httpClient(url).then(({ json }) => ({ data: json }));
  // },

  // getManyReference: (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify({
  //       ...params.filter,
  //       [params.target]: params.id,
  //     }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   return httpClient(url).then(({ headers, json }) => ({
  //     data: json,
  //     total: parseInt(
  //       (headers.get("content-range") || "0").split("/").pop() || "0",
  //       10
  //     ),
  //   }));
  // },

  // update: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json })),

  // updateMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json }));
  // },

  create: async (resource, data) => {
    try {
      await fetch(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  },

  // delete: (resource, params) =>
  //   httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //     method: "DELETE",
  //   }).then(({ json }) => ({ data: json })),

  // deleteMany: (resource, params) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //     method: "DELETE",
  //   }).then(({ json }) => ({ data: json }));
  // },
};
