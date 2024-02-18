import { atom, selector } from "recoil";
import axios from "axios";

const user = atom({
    key: "user",
    default: selector({
        key: "userSelector",
        get: async () => {
            const response = await axios.get("https://api.github.com/users/noobmaster432");
            return response.data;
        }
    })
});

export default user;