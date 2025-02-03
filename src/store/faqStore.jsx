import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const useFaqStore = create((set, get) => ({
    faqData: null,
	singleFaqData: null,
	loading: false,
	error: null,
	message: null,


 createFaq: async ({ question, answer}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/faq", { question, answer  });
			set({  loading: false, quizDetails: res.data.data  });
			console.log("FAQ result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllFaq: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/faq");
			set({  loading: false,  faqData: res.data.data});
			console.log("All quiz result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getFaq: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/faq/${id}`);
			set({  loading: false,  singlecFaqData: res});
			console.log("single qiiz result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateFaq: async ({id,question, answer,}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/quiz/${id}`, {question, answer,});
			set({  loading: false });
			console.log("update faq result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating faq", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    

     deleteFaq: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/faq/${id}`);
			set({  loading: false });
			console.log("deleted faq")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting faq", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
     


}))