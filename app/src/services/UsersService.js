import api from "../helper/api";

class UserService {
    whoAmI() {
        return api("/users/me");
    }

    // setAvatar(imageUrl) {
    //     return api(`/users/setAvatar`, "POST", { imageUrl: imageUrl });
    // }
}

export default new UserService();