// Handle errors in real world app
export function fetchConfig(): Promise<string> {
    return fetch(`http://localhost:27830/api/mds/AnalysisConfig/Bing/`)
        .then((response: Response) => response.json())
        .then((json: any) => {
            return JSON.stringify(json, null, 4); // format
        });
}