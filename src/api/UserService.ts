import axios, { AxiosResponse } from "axios";
import { iUser } from "../models/iUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<iUser[]>> {
    return axios.get<iUser[]>('./users.json')
  }
}