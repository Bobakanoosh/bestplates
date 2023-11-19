const BZ_ACCOUNT_ID = import.meta.env.BZ_ACCOUNT_ID;
const BZ_APPLICATION_KEY = import.meta.env.BZ_APPLICATION_KEY;

export interface AuthorizeAccountResponse {
	apiUrl: string;
	authorizationToken: string;
}

export async function authorizeAccount(): Promise<AuthorizeAccountResponse | undefined> {
	try {
		const response = await fetch("https://api.backblazeb2.com/b2api/v1/b2_authorize_account", {
			method: "POST",
			headers: {
				Authorization: "Basic " + btoa(`${BZ_ACCOUNT_ID}:${BZ_APPLICATION_KEY}`),
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});

		return await response.json();
	} catch (e) {
		console.error(e);
		return undefined;
	}
}
