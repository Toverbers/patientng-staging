import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";


export const useNewsletterStore = create((set,get) => ({

	newsletterData: null,
    singleNewsletter: null,
	loading: false,
	error: null,
	message: null,


    createNewsletter: async ({ newsletter_name, newsletter_subject, newsletter_body}) => {
		set({ loading: true });
		try {
			const res = await axiosInstance.post("/admin/newsletter/create", { newsletter_name, newsletter_subject, newsletter_body });
			set({  loading: false,  });
			console.log("newsletter result",res.data.mesage)
			console.log("newsletter result console",res)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllNewsletter: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/newsletter/get");
			set({  loading: false,  newsletterData: res.data.data});
			console.log("All newsletter result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blogs", loading: false });
			console.log("NEWSLETTER ERROR",error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getNewsletter: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-single-newsletter/${id}`);
			set({  loading: false,  singleNewsletter: res.data.result});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateNewsletter: async ({id, content, docs, status, scheduledDate}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-newsletter/${id}`, {content, docs, status, scheduledDate});
			set({  loading: false });
			console.log("update blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    changeNewsletterStatus: async ({id, status, scheduledDate}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-newsletter-status/${id}`, { status, scheduledDate});
			set({  loading: false });
			console.log("update blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteNewsletter: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-newsletter/${id}`);
			set({  loading: false });
			console.log("deleted blog")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},


}));