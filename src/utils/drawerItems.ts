import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";
import {
  Dashboard,
  VerifiedUserRounded,
  MedicalServices,
  Person,
  Schedule,
  Settings,
  Notifications,
  Analytics,
  Book,
  AssignmentInd,
  Payment,
  FolderSpecial,
  DocumentScannerRounded,
  ScheduleOutlined,
  StarOutline,
} from "@mui/icons-material";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },
        {
          title: "Management User",
          path: `${role}/manage-users`,
          icon: VerifiedUserRounded,
        },
        {
          title: "System Settings",
          path: `${role}/system-settings`,
          icon: Settings,
        },
        {
          title: "Site Analytics",
          path: `${role}/analytics`,
          icon: Analytics,
        },
        {
          title: "Audit Logs",
          path: `${role}/audit-logs`,
          icon: Book,
        },
        {
          title: "Notifications",
          path: `${role}/notifications`,
          icon: Notifications,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },

        {
          title: "Specialites",
          path: `${role}/specialites`,
          icon: FolderSpecial,
        },
        {
          title: "Doctors",
          path: `${role}/doctor`,
          icon: DocumentScannerRounded,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: ScheduleOutlined,
        },
        {
          title: "Appoinments",
          path: `${role}/appoinments`,
          icon: Book,
        },

        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: StarOutline,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },
        {
          title: "My Patients",
          path: `${role}/patients`,
          icon: Person,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: MedicalServices,
        },
        {
          title: "Medical Records",
          path: `${role}/medical-records`,
          icon: AssignmentInd,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: Book,
        },
        {
          title: "Notifications",
          path: `${role}/notifications`,
          icon: Notifications,
        },
        {
          title: "Settings",
          path: `${role}/settings`,
          icon: Settings,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },
        {
          title: "My Appointments",
          path: `${role}/appointments`,
          icon: Schedule,
        },
        {
          title: "Medical History",
          path: `${role}/medical-history`,
          icon: MedicalServices,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: Payment,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: Person,
        },
        {
          title: "Health Reports",
          path: `${role}/health-reports`,
          icon: Analytics,
        },
        {
          title: "Notifications",
          path: `${role}/notifications`,
          icon: Notifications,
        },
        {
          title: "Settings",
          path: `${role}/settings`,
          icon: Settings,
        }
      );
      break;
    default:
      break;
  }

  return roleMenus;
};
