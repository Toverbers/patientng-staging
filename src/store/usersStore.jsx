import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";
//import axiosInstance from "@/utils/axiosInstance";

export const useUserStore = create((set, get) => ({
    userData: [],
	singleUserData: null,
	data: [],
	currentPage: 1,
	itemsPerPage: 10,
	totalPages: 1,
	loading: false,
	error: null,
	message: null,

	setPage: (page) => {
		console.log("setPage called with:", page);
		set({ currentPage: page });
		//console.log("New currentPage in state:", get().currentPage);
	  },


	createClient: async ({ firstName, lastName, phone, email, companyName, additionalInformation, dob}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/create-client", { firstName, lastName, phone, email, companyName, additionalInformation, dob });
			set({  loading: false,  });
			console.log("Clients result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating clients", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllUser: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/admin_user/get");
			set({  loading: false,  userData: res.data.data});
			console.log("All clients result FULL",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching clients", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	/* setData: (data, totalPages) => set({ data, totalPages, loading: false }),
	setLoading: (loading) => set({ loading }),
	setError: (error) => set({ error, loading: false }), */

	

    getAllUsers: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			//const res = await axiosInstance.get(`/admin/admin_user/get?page=${page}&limit=${limit}`);
			const res = await axiosInstance.get('/admin/admin_user/get', {
				params: { page, limit },
			  });
			set({  loading: false,  userData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit });
			console.log("All clients result FULL",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching clients", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getClient: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/admin_user/${id}`);
			set({  loading: false,  singleUserData: res.data.data});
			console.log("single client result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Client", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    

    updateClient: async ({id, firstName, lastName, content}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-client/${id}`, {firstName, lastName, phone, email, companyName, additionalInformation, dob});
			set({  loading: false });
			console.log("update testimonial result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating testimonial", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    changeClientStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.patch(`/admin/admin_user/${id}/status`, {status});
			set({  loading: false });
			console.log("update status result",res.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating status", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },

    deleteClient: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-client/${id}`);
			set({  loading: false });
			console.log("deleted client")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting client", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}))