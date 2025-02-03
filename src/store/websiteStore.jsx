import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";


export const useWebsiteStore = create((set,get) => ({

	websiteData: null,
    singleWebsite: null,
	loading: false,
	error: null,
	message: null,


    createDocs: async ({ termsAndCondition, aboutUs, contactUs,}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/create-dedocs", { termsAndCondition, aboutUs, contactUs, });
			set({  loading: false,  });
			console.log("website result",res)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Docs", loading: false });
			console.log("DOCS ERROR",error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllDOcs: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-docs");
			set({  loading: false,  websiteData: res.data.result});
			//console.log("All DOCS result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Website Document", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
/* 
    getNewsletter: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axios.get(`/get-single-newsletter/${id}`);
			set({  loading: false,  singleNewsletter: res});
			console.log("single blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */

    updateDocs: async ({termsAndCondition, aboutUs, contactUs, socialMedia}) => {
		set({ loading: true });

		try {
			const res = await axios.put(`/update-dedocs`, {termsAndCondition, aboutUs, contactUs, socialMedia});
			set({  loading: false });
			console.log("update Docs result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Docs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}));