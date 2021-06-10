import axios from "axios";
const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseURL = "https://api.airtable.com/v0/appKHh7skkcBvIZx4/teams";

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const getLeagues = async () => {
  try {
    const res = await axios.get(baseURL, config);
    return res.data.records;
  } catch (error) {
    console.log(error);
  }
};

export const getTeam = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addTeams = async (form) => {
  try {
    const res = await axios.post(
      `${baseURL}`,
      {
        fields: form,
      },
      config
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const editTeam = async (form, id) => {
  try {
    const res = await axios.put(`${baseURL}/${id}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteTeam = async (id) => {
  try {
    const res = await axios.delete(`${baseURL}/${id}`, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
