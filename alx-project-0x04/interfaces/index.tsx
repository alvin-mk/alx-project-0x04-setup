// interface/index.tsx

// Interface for Button Props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'; // colors as examples, can be extended
  action?: () => void;
}

// Interface for Layout Component Props
export interface LayoutProps {
  children: React.ReactNode; // to ensure that any children passed to Layout are valid React components
}

// Interface for Page Routing Props
export interface PageRouteProps {
  pageRoute: string; // represents the route to navigate to when the button is clicked
}

// Interface for Footer Link Props
export interface FooterLinkProps {
  title: string;
  url: string;
}

// Interface for Social Media Links in Footer
export interface SocialMediaProps {
  platform: 'facebook' | 'twitter' | 'instagram'; // Can be extended for other platforms
  url: string;
}

// Interface for the Header Component Links
export interface HeaderLinkProps {
  label: string;
  url: string;
}
