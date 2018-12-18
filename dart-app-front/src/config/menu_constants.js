const Menu = [
  {
    label: "Dashboard",
    icon: "pi pi-fw pi-home",
    path: "/admin/dashboard",
    command: () => {}
  },
  {
    label: "Manage Users",
    icon: "pi pi-fw pi-cog",
    items: [
      {
        label: "User Lists",
        icon: "pi pi-fw pi-bars",
        path: "/admin/users"
      }
    ]
  },
  {
    label: "Manage Challenge",
    icon: "pi pi-fw pi-align-left",
    items: [
      {
        label: "Open Challenges",
        icon: "pi pi-fw pi-bars",
         path: "/admin/open-challenges"
      },
      {
        label: "Match Played Lits",
        icon: "pi pi-fw pi-bars",
        path: "/admin/match-played"
      }
    ]
  },
  {
    label: "Manage CMS",
    icon: "pi pi-fw pi-globe",
    //badge: "9",
    items: [
      {
        label: "Lists",
        icon: "pi pi-fw pi-star-o",
        path: "/admin/content-management"
      },
      {
        label: "Forms",
        icon: "pi pi-fw pi-calendar",
        command: () => {
          window.location = "#/forms";
        }
      },
      {
        label: "Data",
        icon: "pi pi-fw pi-align-justify",
        command: () => {
          window.location = "#/data";
        }
      },
      {
        label: "Panels",
        icon: "pi pi-fw pi-th-large",
        command: () => {
          window.location = "#/panels";
        }
      },
      {
        label: "Overlays",
        icon: "pi pi-fw pi-clone",
        command: () => {
          window.location = "#/overlays";
        }
      },
      {
        label: "Menus",
        icon: "pi pi-fw pi-bars",
        command: () => {
          window.location = "#/menus";
        }
      },
      {
        label: "Messages",
        icon: "pi pi-fw pi-info-circle",
        command: () => {
          window.location = "#/messages";
        }
      },
      {
        label: "Charts",
        icon: "pi pi-fw pi-clock",
        command: () => {
          window.location = "#/charts";
        }
      },
      {
        label: "Misc",
        icon: "pi pi-fw pi-filter",
        command: () => {
          window.location = "#/misc";
        }
      }
    ]
  },
  {
    label: "Template Pages",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Empty Page",
        icon: "pi pi-fw pi-circle-off",
        command: () => {
          window.location = "#/empty";
        }
      }
    ]
  },
  {
    label: "Menu Hierarchy",
    icon: "pi pi-fw pi-search",
    items: [
      {
        label: "Submenu 1",
        icon: "pi pi-fw pi-bookmark",
        items: [
          {
            label: "Submenu 1.1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" }
            ]
          },
          {
            label: "Submenu 1.2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 1.2.2", icon: "pi pi-fw pi-bookmark" }
            ]
          }
        ]
      },
      {
        label: "Submenu 2",
        icon: "pi pi-fw pi-bookmark",
        items: [
          {
            label: "Submenu 2.1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 2.1.3", icon: "pi pi-fw pi-bookmark" }
            ]
          },
          {
            label: "Submenu 2.2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 2.2.2", icon: "pi pi-fw pi-bookmark" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Documentation",
    icon: "pi pi-fw pi-question",
    command: () => {
      window.location = "#/documentation";
    }
  },
  {
    label: "View Source",
    icon: "pi pi-fw pi-search",
    command: () => {
      window.location = "https://github.com/primefaces/sigma";
    }
  }
];
export default {
  Menu
};
