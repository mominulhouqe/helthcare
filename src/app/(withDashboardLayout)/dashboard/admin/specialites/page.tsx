"use client";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { getUserInfo } from "@/services/auth.services";
import { toast } from "sonner";

const SpecialitesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const userInfo = getUserInfo();
  console.log(userInfo);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  // console.log(data);
  const [deleteSpecialty] = useDeleteSpecialtyMutation();
  const handleDelete = async (id: string) => {
    // console.log("delete", id);
    try {
      const res = await deleteSpecialty(id);
      console.log(res);
      if (res?.data?.id) {
        toast.success("Specialty deleted successfully");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image
              src={row?.icon || ""}
              alt="icon"
              width={40}
              height={40}
              style={{ borderRadius: "8px" }}
            />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            onClick={() => handleDelete(row.id)}
            aria-label="delete"
            style={{ color: "red" }}
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="contained"
          color="primary"
        >
          Create Specialty
        </Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          size="small"
          placeholder="Search Specialist"
          sx={{ width: "200px" }}
        />
      </Stack>
      <Box>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Display Specialist
        </Typography>
        {isLoading ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <Box mt={4}>
            <DataGrid
              rows={data || []}
              columns={columns}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0, backgroundColor: "white", borderRadius: "8px" }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SpecialitesPage;
