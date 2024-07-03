// src/hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUsers, addUser, deleteUser } from "../services/userService";

const USERS_QUERY_KEY = "users";

export const useUsers = () => {
  return useQuery(USERS_QUERY_KEY, getUsers);
};

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(USERS_QUERY_KEY); // Invalidates the cache for 'users' key
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteUser(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(USERS_QUERY_KEY); // Invalidates the cache for 'users' key
    },
  });
};
