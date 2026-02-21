export interface Report {
  id: string;
  model: string;
  rating: number;
  badge: string;
}

export interface Submission {
  text: string;
}

const trendingReports: Report[] = [
  { id: "01KJ0TMA6BBHVWBF4C76D99S3H", model: "Lenovo ThinkPad T14 Gen 4 (AMD)", rating: 5, badge: "Platinum" },
  { id: "01KJ0TMA6BJ2KRZ84RZ1CCNK1P", model: "Dell XPS 13 9310", rating: 5, badge: "Gold" },
  { id: "01KJ0TMA6BTBDZYB9NFE41DNV8", model: "HP Spectre x360 14", rating: 3, badge: "Silver" },
  { id: "01KJ0XT0R9CWT8YNW1P1WHYXP9", model: "Asus Zephyrus G14 (2023)", rating: 2, badge: "Bronze" },
];

const recentSubmissions: Submission[] = [
  { text: "T480, Fedora 40: everything works except fingerprint" },
  { text: "XPS 15 9520, Ubuntu 24.04: suspend flaky, needs kernel tweak" },
];

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchDashboardData = async () => {
  await delay(3000);
  return {
    trendingReports,
    recentSubmissions,
  };
};
