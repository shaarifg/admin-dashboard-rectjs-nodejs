import { Navigation } from "./navigation.interface";

export const NavigationData:Navigation[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: "space_dashboard_outlined",
    link: "",
    childLabels:null
  },
  {
    id: 2,
    label: "Customers",
    icon: "group_outlined",
    link: "",
    childLabels: [
      {
        id: 2.1,
        label: "Current",
        icon: "",
        link: "",
      },
      {
        id: 2.2,
        label: "New",
        icon: "",
        link: "",
      },
      {
        id: 2.3,
        label: "Negotiating",
        icon: "",
        link: "",
      },
    ],
  },
  {
    id: 3,
    label: "All reports",
    icon: "note_alt_outlined",
    link: "",
    childLabels:null
  },
  {
    id: 4,
    label: "Geography",
    icon: "language_outlined",
    link: "",
    childLabels:null
  },
  {
    id: 5,
    label: "Conversations",
    icon: "sms_outlined",
    link: "",
    childLabels:null
  },
  {
    id: 6,
    label: "Deals",
    icon: "reviews_outlined",
    link: "",
    childLabels:null
  },
  {
    id: 7,
    label: "Export",
    icon: "send_to_mobile_outlined",
    link: "",
    childLabels:null
  },
];
