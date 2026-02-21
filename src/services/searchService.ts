import {delay, fetchDashboardData} from "./reportService";
import ResultCard from "../components/ResultCard";
import React from "react";

export interface SearchResult {
    id: string,
    model: string,
    rating: number,
    badge: string,
    knownIssues: string,
    popularDistros: string,
}

export async function basicSearch(searchTerm: string): Promise<SearchResult[]> {
    await delay(1000);
    
    return [
        {
            id: "01KJ0TMA6B4NRE8DT6HYAVWTDW",
            model: "Dell XPS 15 9520 (2022)",
            rating: 5,
            badge: "Gold",
            knownIssues: "Suspend, Hybrid GPU Switching, Webcam IR",
            popularDistros: "Ubuntu 24.04, Fedora 40, Arch",
        },
        {
            id: "01KJ0TMA6BQDPE5H6ZAVKA8SGN",
            model: "Dell XPS 15 9510 (2021)",
            rating: 3,
            badge: "Silver",
            knownIssues: "Audio crackle, Thunderdock issues",
            popularDistros: "",
        },
    ];
}