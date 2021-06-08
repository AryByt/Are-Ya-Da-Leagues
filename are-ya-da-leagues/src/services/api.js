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
    return res.data
  } catch (error){
  console.log(error)
}
};