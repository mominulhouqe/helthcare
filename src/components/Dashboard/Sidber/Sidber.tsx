import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import asset from "@/assets";
import Link from "next/link";

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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidber;
