import {
  Building2,
  Cable,
  Headphones,
  HousePlug,
  KeyRound,
  Network,
  PhoneCall,
  ShieldCheck,
  Wifi,
} from "lucide-react";

export const packages = [
  {
    speed: "5 Mbps",
    name: "Basic",
    price: "To be confirmed",
    description: "For essential browsing, email, messaging, and light internet use.",
    features: ["Monthly billing", "Professional setup", "Support terms to be confirmed"],
  },
  {
    speed: "10 Mbps",
    name: "Standard",
    price: "To be confirmed",
    description: "For everyday browsing, social media, streaming, and connected devices.",
    features: ["Monthly billing", "Professional setup", "Equipment details to be confirmed"],
    recommended: true,
  },
  {
    speed: "15 Mbps",
    name: "Premium",
    price: "To be confirmed",
    description: "For families, regular streaming, remote work, and more connected devices.",
    features: ["Monthly billing", "Professional setup", "Installation fee to be confirmed"],
  },
  {
    speed: "30 Mbps",
    name: "Ultimate",
    price: "To be confirmed",
    description: "For heavier usage, larger households, and demanding connectivity needs.",
    features: ["Monthly billing", "Professional setup", "Contract terms to be confirmed"],
  },
];

export const services = [
  { title: "Residential Internet Services", icon: Wifi, description: "Reliable internet packages for homes, apartments, and residential developments.", href: "/residential-internet" },
  { title: "Network Security Solutions", icon: ShieldCheck, description: "Security-conscious planning and configurations for modern connected environments.", href: "/network-security" },
  { title: "Unified Communication Systems", icon: Headphones, description: "Integrated systems that support clearer organizational communication and collaboration.", href: "/unified-communications" },
  { title: "VoIP Solutions", icon: PhoneCall, description: "Flexible voice communication systems designed around business requirements.", href: "/unified-communications" },
  { title: "Call Center Solutions", icon: Headphones, description: "Communication infrastructure tailored to customer service operations.", href: "/unified-communications" },
  { title: "Access Control Systems", icon: KeyRound, description: "Solutions for managing and monitoring entry to buildings and secured areas.", href: "/services" },
  { title: "Structural Cabling", icon: Cable, description: "Organized network cabling installed for reliability and maintainability.", href: "/services" },
  { title: "Customized Networking Solutions", icon: HousePlug, description: "Purpose-built networking for residential, commercial, and organizational needs.", href: "/services" },
  { title: "Network Infrastructure Design", icon: Network, description: "Scalable network planning based on property, capacity, and operational needs.", href: "/network-infrastructure" },
] as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Internet", href: "/internet-packages" },
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential-internet" },
  { label: "About", href: "/about" },
  { label: "Coverage", href: "/coverage" },
] as const;

export const propertyTypes = [
  { title: "Individual homes", icon: HousePlug, text: "A practical connection and setup planned around your household." },
  { title: "Apartment buildings", icon: Building2, text: "Organized distribution and cabling across multiple residential units." },
  { title: "Residential estates", icon: Wifi, text: "A coordinated approach to connectivity across a wider property." },
  { title: "Multi-unit developments", icon: Network, text: "Scalable infrastructure designed around present and future occupancy." },
];