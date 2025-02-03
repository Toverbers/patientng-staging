import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UseBlogStore = create((set, get) => ({
    blogData: null,
	singleBlog: null,
	commentData: null,
	blogCategory: null,
	singleCategory: null,
	blogComments: null,
	authorData: null,
	singleAuthor: null,
	loading: false,
	error: null,
	message: null,


	createBlog: async ({ title, urlSlug, category, content, publisher, status, bodyImage, titleImage}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	    }

		try {
			const res = await axiosInstance.post("/post-blog", { title, urlSlug, category, content, publisher, status, bodyImage, titleImage }, config);
			set({  loading: false,  });
			//console.log("Blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllBlogs: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-blogs");
			set({  loading: false,  blogData: res.data.results});
			//console.log("All Blog result",res.data.results)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blogs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getBlog: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-single-blog/${id}`);
			set({  loading: false,  singleBlog: res.data.result, commentData: res.data.comment });
			console.log("single blog result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateBlog: async ({id, title, urlSlug, category, content, publisher, status, bodyImage, titleImage}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	    }

		try {
			const res = await axiosInstance.put(`/update-blog/${id}`, {title, urlSlug, category, content, publisher, status, bodyImage, titleImage}, config);
			set({  loading: false });
			console.log("update blog result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteBlog: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-blog/${id}`);
			set({  loading: false });
			console.log("deleted blog")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	getBlogComments: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/fetch-blog-comments/${id}`);
			set({  loading: false,  blogComments: res.data.results});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog Comments", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	postComment: async ({ id, comment}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post(`/comment-on-blog/${id}`, { comment });
			set({  loading: false,  });
			console.log("Category result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating blog category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	likeBlog: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/like-blog/${id}`);
			set({  loading: false });
			console.log("update category result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



	/* BLOG CATEGORY HERE */
	createCategory: async ({ name}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/hub_category", { name });
			set({  loading: false,  });
			console.log("Category result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating blog category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllCategory: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-blog-categories");
			set({  loading: false,  categoryData: res.data.results});
			//console.log("All category result",res.data.results)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blogs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getCategory: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`admin/hub_category/${id}`);
			set({  loading: false,  singleCategory: res.data.data});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateCategory: async ({id, name}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-blog-category/${id}`, {name});
			set({  loading: false });
			console.log("update category result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteCategory: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/hub_category//${id}`);
			set({  loading: false });
			console.log("deleted blog category")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



	/* AUTHOR */

	createAuthor: async ({ author_name, author_title, author_image, is_default}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	       }

		try {
			const res = await axiosInstance.post("/admin/author", { author_name, author_title, author_image, is_default }, config);
			set({  loading: false,  });
			console.log("Author result",res)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Author", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllAuthor: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/author");
			set({  loading: false,  authorData: res.data.data});
			//console.log("All authors result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Authors", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getAuthor: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/author/${id}`);
			set({  loading: false,  singleAuthor: res.data.data});
			//console.log("single author result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Author", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateAuthor: async ({id, author_title, author_image,author_name, is_default}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/author/${id}`, { author_title, author_image,author_name, is_default});
			set({  loading: false });
			console.log("update author result",res)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating author", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteAuthor: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/author/${id}`);
			set({  loading: false });
			console.log("deleted author")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting author", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},


}))