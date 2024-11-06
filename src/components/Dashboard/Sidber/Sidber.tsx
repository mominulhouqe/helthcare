import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import asset from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidberItems from "./SidberItems";

const Sidber = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={2}
        component={Link}
        href="/"
        sx={{
          cursor: "pointer",
        }}
      >
        <Box>
          <Image
            src={asset.svgs.logo}
            height={40}
            width={40}
            alt="logo"
          ></Image>
        </Box>
        <Typography>MYHelthCare</Typography>
      </Stack>
      <List>
        {drawerItems("super_admin" as UserRole).map((item, index) => (
          <SidberItems key={index} item={item} />
        ))}
      </List>
    </div>
  );
};

export default Sidber;
