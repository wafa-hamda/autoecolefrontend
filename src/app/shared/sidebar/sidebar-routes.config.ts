import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

  {
    path: '', title: 'Administration', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/moniteurs', title: 'Moniteurs', icon: 'ft-monitor', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/candidats', title: 'Candidats', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/vehicules', title: 'Vehicules', icon: 'fa fa-taxi', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/credits', title: 'Credits', icon: 'ft-copy', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  { path: '/calendar', title: 'Planning', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/examens', title: 'Examens', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/dashboard', title: 'Comptabilité', icon: 'ft-bar-chart-2', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/chat', title: 'Contact', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/aide', title: 'Aide', icon: 'ft-aperture', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];
