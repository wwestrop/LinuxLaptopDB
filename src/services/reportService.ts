export interface Report {
  model: string;
  rating: number;
  badge: string;
}

export interface Submission {
  text: string;
}

const trendingReports: Report[] = [
  { model: "Lenovo ThinkPad T14 Gen 4 (AMD)", rating: 5, badge: "Platinum" },
  { model: "Dell XPS 13 9310", rating: 5, badge: "Gold" },
  { model: "HP Spectre x360 14", rating: 3, badge: "Silver" },
  { model: "Asus Zephyrus G14 (2023)", rating: 2, badge: "Bronze" },
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
