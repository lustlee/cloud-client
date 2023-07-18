import axios from "@/core/axios";
import { LoginFormDTO, LoginResponseDTO } from "@/api/dto/auth.dto";

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponseDTO> => {
  return (await axios.post("/auth/login", values)).data;
};