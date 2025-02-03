import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const useDashboardStore = create((set, get) => ({
    dashboardData: null,
	loading: false,
	error: null,
	message: null,


 

    getDashboard: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/info");
			set({  loading: false,  dashboardData: res.data.data});
			//console.log("All question result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching question", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}))