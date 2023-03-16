import axios from "axios";

const baseURL = "https://wolfame-2023-server.onrender.com";

export default axios.create({
	baseURL,
	timeout: 20000, // 20s
});
