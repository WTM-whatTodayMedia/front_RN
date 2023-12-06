import { useMutation } from "react-query";
import apiClient from "../util/lib/apiClient";

export const fetchList = async () => {
  const { data } = await apiClient.post("");
  return data;
};

export const fetchListItem = async (id: number) => {
  const { data } = await apiClient.get(`/questions/${id}`);
  return data;
};
