const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3001';

export interface SearchResult {
    id: string,
    model: string,
    rating: number,
    badge: string,  // TODO use an enum
    knownIssues: string,
    popularDistros: string, // TODO split into a list
}

export async function basicSearch(searchTerm: string): Promise<SearchResult[]> {
    const response = await fetch(`${API_BASE_URL}/api/search?q=${encodeURIComponent(searchTerm)}`);
    if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
    }
    return response.json();
}

export async function getPopularSearches(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/api/popular-searches`);
    if (!response.ok) {
        // TODO should probably log this or something, but don't want this to cause a failure
        return [];
    }
    return response.json();
}

export async function getModelSummary(id: string): Promise<SearchResult> {
    const response = await fetch(`${API_BASE_URL}/api/model/${encodeURIComponent(id)}`);
    if (!response.ok) {
        throw new Error(`Failed to get model details for id: ${id}`);
    }
    return response.json();
}