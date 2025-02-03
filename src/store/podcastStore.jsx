import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UsePodcastStore = create((set, get) => ({
    podcastData: null,
    singlePodcast: null,
    podcastCategory: null,
	loading: false,
	error: null,
	message: null,



    getAllPodcast: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-podcasts");
			set({  loading: false,  podcastData: res.data.results});
			//console.log("All Blog result",res.data.results)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Podcasts", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

     getPodcast: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-single-podcast/${id}`);
			set({  loading: false,  singlePodcast: res.data.result});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

     getPodcastCategory: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-podcast-categories/`);
			set({  loading: false,  podcastCategory: res.data.results});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Podcast Category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    


}))