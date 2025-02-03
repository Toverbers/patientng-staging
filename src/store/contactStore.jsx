import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UseContactStore = create((set) => ({
    
	loading: false,
	error: null,
	message: null,


	
    createContact: async ({ email, firstName, lastName, message, phone}) => {
		set({ loading: true });
		
		try {
			const res = await axiosInstance.post("/contact-us", { email, firstName, lastName, message, phone });
			set({  loading: false,  });
			//console.log("Blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error sending message", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 



}))