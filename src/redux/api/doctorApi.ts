import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
    getAllDoctor: build.query({
      query: () => ({
        url: "/doctor",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorQuery,
  useDeleteDoctorMutation,
} = doctorApi;
