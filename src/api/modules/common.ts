import service from "../../api";
import { PetInfo } from "../../store/features/petSlice";

export function getPetDetails() {
    return service.get<PetInfo>("https://mock.apifox.cn/m1/1106995-0-default/pet/1");
}
