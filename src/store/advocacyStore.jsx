import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UseAdvocacyStore = create((set, get) => ({
    advocacyData: null,
	singleAdvocacy: null,
	userAdvocacy: null,
	loading: false,
	error: null,
	message: null,


	
    createAdvocacy: async ({ hospitalName, hospitalAddress, complaints, category}) => {
		set({ loading: true });
		
		try {
			const res = await axiosInstance.post("/create-advocacy", { hospitalName, hospitalAddress, complaints, category });
			set({  loading: false,  });
			//console.log("Blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error creating advocacy", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllAdvocacy: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-all-advocacies");
			set({  loading: false,  advocacyData: res.data.results});
			console.log("All Blog result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Campaigns", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAdvocacyFiles: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-advocacy-files");
			set({  loading: false,  advocacyData: res.data.results});
			console.log("All Blog result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Campaigns", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getAdvocacy: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-single-advocacy/${id}`);
			set({  loading: false,  singleAdvocacy: res.data.result});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Advocacy", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getUserAdvocacy: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-user-advocacies/${id}`);
			set({  loading: false,  userAdvocacy: res.data.result});
			//console.log("user Campain result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateAdvocacy: async ({id, hospitalName, hospitalAddress, complaints, category}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-advocacy/${id}`, {hospitalName, hospitalAddress, complaints, category});
			set({  loading: false });
			console.log("update Advocacy result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Advocacy", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    toggleAdvocacyStatus: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-advocacy-status/${id}`);
			set({  loading: false });
			console.log("update Advocacy result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Advocacy", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteAdvocacy: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-advocacy/${id}`);
			set({  loading: false });
			console.log("deleted Advocacy")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}))