import axios from "axios";
const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const baseURL = "https://api.airtable.com/v0/appKHh7skkcBvIZx4/Table%201";

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const getLeagues = async () => {
  try {
    const res = await axios.get(baseURL, config)
    return res.data.records
  } catch (error){
  console.log(error)
}
};

export const getTeam = async (id) => {
  try {
    const res = await axios.get(`${baseURL}/${id}`, config)
    return res.data
  } catch (error) {
    console.log(error)
  }
};

export const addingTeams = async (form) => {
  try {
    const res = await axios.get(`${baseURL}`,{fields:form},config)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
