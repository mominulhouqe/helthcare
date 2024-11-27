"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
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
          Create Doctor
        </Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        {/* <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} /> */}
        <TextField
          size="small"
          placeholder="Search Specialist"
          sx={{ width: "200px" }}
        />
      </Stack>
    </Box>
  );
};

export default DoctorPage;
