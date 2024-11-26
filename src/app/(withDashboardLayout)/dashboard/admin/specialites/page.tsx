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
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const SpecialitesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  // console.log(data);
  const handleDelete = (id: string) => {
    console.log("delete", id);
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image
              src={row?.icon || ""}
              alt="icon"
              width={60}
              height={50}
              style={{ borderRadius: "8px" }}
            />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
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
