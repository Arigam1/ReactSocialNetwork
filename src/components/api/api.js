import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "349d41a8-bede-4423-bc93-d8a5409e9908",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        // ЭТО ПРОМИС! ! ! ! сокращает путь) чтоб компонента не брала лишнюю инфу
        return response.data;
      });
  },

  getUnfollow(id) {
    return instance.delete(`follow/${id}`);
  },

  getFollow(id) {
    return instance.post(`follow/${id}`);
  },

  authMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};

//     .then((response) => {
//       if (response.data.resultCode === 0) {
//         let { id, email, login } = response.data.data;
//         this.props.setAuthUserData(id, email, login);
//       }
//     });
// }
