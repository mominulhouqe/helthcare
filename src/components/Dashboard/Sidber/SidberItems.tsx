import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DrawerItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Iprops = {
  item: DrawerItem;
};

const SidberItems = ({ item }: Iprops) => {
  const linkPath = `/dashboard/${item.path}`;

  const pathName = usePathname();
  //   console.log(pathName);

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidberItems;
