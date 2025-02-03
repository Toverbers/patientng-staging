import { create } from "zustand";
import axiosInstance from '../utils/axiosInstance';
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  checkingAuth: true,
  myData: null,
  token: null,
  loading: false,
  regSuccess: false,
  otpSuccess: false,
  onboardSuccess: false,
  serviceSuccess: false,
  sendOtp: false,
  sendToken: false,
  emailSuccess: false,
  ResetPass: false,
  error: null,
  showErrorModal: false,
  isLogout: false,


  checkAuth: async () => {
	set({ checkingAuth: true });
	const refreshToken = localStorage.getItem('refreshToken')
	console.log(" refresh token",refreshToken)
	console.log("Authorized")
	try {
		
		const response = await axiosInstance.post("/get-access-token", {refreshToken: refreshToken});
		set({ user: response.data, checkingAuth: false, isAuthenticated: true, });
		localStorage.setItem('accessToken', response.data.result);
		console.log('NEW ACCESS access-token',response.data.result)
	} catch (error) {
		console.log("ACCESS TOKEN ERROR",error);
		set({ checkingAuth: false, user: null });
	}
},


  login: async ({email, password}) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/sign-in', { email, password });
      const token  = response.data?.tokens;
      const user = response.data?.result
      console.log("LOGIN User", response)
	  localStorage.setItem('accessToken', response.data.tokens.accessToken);
      localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
	  toast.success(response.data.message);
      set({ user: user, token: token, loading: false });
    } catch (error) {
      console.error("Login failed", error);
      set({ loading: false, error: 'Login failed. Please check your credentials.', showErrorModal: true });
	  toast.error(error.response.data.message || "An error occurred");
    }
  },

  register: async ({ email, firstName, lastName, phone, isAdvocate, password }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/sign-up", { email, firstName, lastName, phone, isAdvocate, password  });
			set({  loading: false, regSuccess: true  });
			console.log("Price result",res.data.result)
			toast.success(res.data.message);
			
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Account", loading: false, });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

  verifyOtp: async ({ email, emailOtp }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/validate-signup-otp", { email, emailOtp  });
			//set({  loading: false, otpSuccess: true  });
			const token  = res.data?.tokens;
			const user = res.data?.result
			console.log("LOGIN User", res)
			localStorage.setItem('accessToken', res.data.tokens.accessToken);
			localStorage.setItem('refreshToken', res.data.tokens.refreshToken);
			toast.success(res.data.message);
			set({ user: user, token: token, loading: false, otpSuccess: true, isAuthenticated: true });
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating price", loading: false, });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
  resendOtp: async ({ email }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/send-signup-otp", { email  });
			set({  loading: false, sendOtp: true  });
			//console.log("Token result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating price", loading: false, });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	resetUserPassword: async ({ email }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/send-password-reset-link", { email  });
			set({  loading: false, emailSuccess: true });
			//console.log("Token result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error reseting password", loading: false, });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	newPassword: async ({ resetCode, password, confirmPassword }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("reset-password", { resetCode, password, confirmPassword  });
			set({  loading: false, ResetPass: true });
			//console.log("Token result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating price", loading: false, });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
  
  userOnboarding: async ({age, gender, address, state, lga}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-user-onboarding`, {age, gender, address, state, lga});
			set({  loading: false, onboardSuccess: true });
			toast.success(res.data.message);
			//toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Facility", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	updateUserProfile: async ({id, firstName, lastName, email, phone, image, age, gender, address, state, lga}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	}

		try {
			const res = await axiosInstance.put(`/update-user-profile/${id}`, {age, gender, address, state, lga, firstName, lastName, email, phone, image,}, config);
			set({  loading: false, onboardSuccess: true });
			toast.success(res.data.message);
			//toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Facility", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

  /* HealthcareService: async ({service, isOnboarded}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/facility/onboarding`, {service, isOnboarded});
			set({  loading: false, serviceSuccess: true });
			toast.success(res.data.message);
			//toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Facility", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */


  UpdateHealthcare: async ({service,facility_type,facility_name, rc_number, address,state, lga, logo, reg_doc, other_doc, isOnboarded}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/facility/onboarding`, {service,facility_type,facility_name, rc_number, address,state, lga, logo, reg_doc, other_doc, isOnboarded});
			set({  loading: false, serviceSuccess: true });
			toast.success(res.data.message);
			//toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating testimonial", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
  changeUserPassword: async ({currentPassword, newPassword}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/change-password`, {currentPassword, newPassword});
			set({  loading: false,  });
			toast.success(res.data.message);
			//toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Changing Password", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	getme: async () => {
		set({ loading: true });
        
		try {
			const token = localStorage.getItem('accessToken')
			const decodeToken = jwtDecode(token);
			console.log("DECODED DATA", decodeToken)
			 const res = await axiosInstance.get(`/get-single-user/${decodeToken?.userId}`);
			set({  loading: false,  myData: res.data.result});
			console.log("user result",res.data.data) 
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error fetching", loading: false });
			console.log("get user error",error);
			//toast.error(error.response.data.message || "An error occurred");
		}
	},


  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    set({ user: null, token: null, isAuthenticated: null, isLogout: true, myData: null });
  },
  closeErrorModal: () => set({ showErrorModal: false, error: null }),

  changeHealthcarePassword: async ({ old_password, new_password }) => {
	set({ loading: true });

	try {
		const res = await axiosInstance.post("/medical_personel/change_password", { old_password, new_password  });
		set({  loading: false, regSuccess: true  });
		console.log("password changed",res.data.data)
		toast.success(res.data.message);
	} catch (error) {
		set({ error: error.response?.data?.message || "Error Creating price", loading: false, });
		console.log(error);
		toast.error(error.response.data.message || "An error occurred");
	}
},



}));

export default useAuthStore;
