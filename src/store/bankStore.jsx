import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UseBankStore = create((set, get) => ({
    bankData: null,
    accountName: null,
	loading: false,
	error: null,
	message: null,


	 verifyBank: async ({ accountNumber, bankCode}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/verify-bank-account", { accountNumber, bankCode });
			set({  loading: false, accountName: res.data.result  });
			console.log("Bank result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error fetching banks", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllBanks: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/banks");
			set({  loading: false,  bankData: res.data.results});
			//console.log("All Blog result",res.data.results)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Banks", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    /* getBlog: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-single-blog/${id}`);
			set({  loading: false,  singleBlog: res.data.result.blog});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */

    


}))