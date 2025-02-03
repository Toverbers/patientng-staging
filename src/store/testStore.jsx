import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

export const UseTestStore = create((set, get) => ({
    bankData: null,
    accountName: null,
	loading: false,
	error: null,
	message: null,


    forgotPassword: async ({ email }) => {
		set({ loading: true });

		try {
			const res = await axios.post("https://testpatience.onrender.com/api/v1/auth/personel/resend_otp", { email  });
			set({  loading: false,  });
			//console.log("Token result",res.data.data)
			console.log("EMAIL HAS BEEN SENT TO YOUR EMAIL")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating price", loading: false, });
			console.log("EMAIL SENDING ERROR",error);
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