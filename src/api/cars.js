import client, { authHeader } from "./client";

export function getCars() {
  return client.get('/auto', {
    headers: authHeader(),
  });
}

export function createCar(data) {
  console.log(data)
  return client.post('/auto', data, {
    headers: authHeader(),
  });
}

export function updateCar(id, data) {
  return client.put(`/auto/${id}`, data, {
    headers: authHeader(),
  });
}

export function getCar(id) {
  return client.get(`/auto/${id}`, {
    headers: authHeader(),
  });
}

export function deleteCar(id) {
  return client.delete(`/auto/${id}`, {
    headers: authHeader(),
  });
}