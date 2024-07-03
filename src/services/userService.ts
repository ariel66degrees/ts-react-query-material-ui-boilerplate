// src/services/userService.ts
import axiosInstance from "../api/axiosConfig";

export const getUsers = async () => {
  const response = await axiosInstance.get("/teeeeeest");
  return response.data;
};

export const addUser = async (user: {
  first_name: string;
  last_name: string;
  personal_email: string;
  employment_type_rev_uuid: string;
}) => {
  const response = await axiosInstance.post("/teeeeeest", user);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosInstance.delete(`/teeeeeest/${id}`);
  return response.data;
};
