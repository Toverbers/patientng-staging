import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UseCampaignStore = create((set, get) => ({
    campaignData: null,
	singleCampaign: null,
	userCampaign: null,
	loading: false,
	error: null,
	message: null,


	
    createCampaign: async ({ title, description, fundraisingFor, accountNumber, accountName, bankCode, bank, state, lga, amountNeeded, image, address}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	    }

		try {
			const res = await axiosInstance.post("/post-crowedFunding", { title, description, fundraisingFor, accountNumber, accountName, bankCode, bank, state, lga, amountNeeded, image, address }, config);
			set({  loading: false,  });
			//console.log("Blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllCampaigns: async () => {
		set({ loading: true });

		try {
			//const res = await axiosInstance.get("/get-crowedFundings");
			const res = await axiosInstance.get("/get-crowedFundings");
			set({  loading: false,  campaignData: res.data.results});
			console.log("All Campaign result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Campaigns", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getCampaign: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/single-crowedfunding/${id}`);
			set({  loading: false,  singleCampaign: res.data.result});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getUserCampaign: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/active-crowdfunding/${id}`);
			set({  loading: false,  userCampaign: res.data.result});
			//console.log("user Campain result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateCampaign: async ({id, title, description, fundraisingFor, accountNumber, accountName, bankCode, bank, state, lga, amountNeeded, image, address}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	    }

		try {
			const res = await axiosInstance.put(`/update-crowedFunding/${id}`, {title, description, fundraisingFor, accountNumber, accountName, bankCode, bank, state, lga, amountNeeded, image, address}, config);
			set({  loading: false });
			console.log("update Campain result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    /* deleteCampaign: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-crowedFunding/${id}`);
			set({  loading: false });
			console.log("deleted campaign")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */
    deleteCampaign: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/soft-delete-crowedFunding/${id}`);
			set({  loading: false });
			console.log("deleted campaign")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    likeCampaign: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/like-crowdfunding/${id}`);
			set({  loading: false });
			console.log("Liked campaign")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Liking campaign", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}))