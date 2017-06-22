// Handle errors in real world app
export function fetchConfig(section: string): Promise<string> {

    const url = `http://localhost:27830/api/mds/${section}/Bing/`;

    return fetch(url)
        .then((response: Response) => response.json())
        .then((json: any) => {
            return JSON.stringify(json, null, 4); // format
        });
}