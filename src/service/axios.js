import axios from 'axios';

export async function getAllBicycles() {
  const response = await axios.get('http://localhost:4400/bicycle_get_all');
  return response.data;
}

export async function addNewBicycle(newBicycleData) {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:4400/bicycle_add_new',
    data: newBicycleData,
  });
  return response.data;
}

export async function rentBicycle(bicycleId) {
  const response = await axios({
    method: 'post',
    url: `http://localhost:4400/rent_bicycle/${bicycleId}`,
  });
  return response.data;
}

export async function rentBicycleCancel(bicycleId) {
  return await axios({
    method: 'post',
    url: `http://localhost:4400/rent_bicycle_cancel/${bicycleId}`,
  });
}

export async function deleteBicycle(bicycleId) {
  return await axios({
    method: 'delete',
    url: `http://localhost:4400/bicycle_delete/${bicycleId}`,
  });
}
