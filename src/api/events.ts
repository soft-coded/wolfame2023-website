import axiosInstance from ".";

const eventsBaseURL = "/event";

export const getEventLeaders = (event: string) =>
	axiosInstance.get(eventsBaseURL + "/get-leaders", {
		params: { "event-name": event },
	});

export const getEventMatches = (event: string, limit = 5) =>
	axiosInstance.get(eventsBaseURL + "/get-matches", {
		params: { "event-name": event, limit },
	});
