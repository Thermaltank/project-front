import { useCallback, useEffect, useState } from "react";
import api from "../api/client";

export function useProveedores() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.get("/api/proveedores");
      setItems(data ?? []);
    } catch (e) {
      setError(e?.response?.data?.message ?? "Error al cargar proveedores");
    } finally {
      setLoading(false);
    }
  }, []);

  const createOne = useCallback(async (payload) => {
    const { data } = await api.post("/api/proveedores", payload);
    setItems((prev) => [data, ...prev]);
    return data;
  }, []);

  const updateOne = useCallback(async (id, payload) => {
    const { data } = await api.put(`/api/proveedores/${id}`, payload);
    setItems((prev) => prev.map((p) => (p.id === id ? data : p)));
    return data;
  }, []);

  const removeOne = useCallback(async (id) => {
    await api.delete(`/api/proveedores/${id}`);
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  return { items, loading, error, fetchAll, createOne, updateOne, removeOne };
}
