import type { AuthorizeAccountResponse } from "./authorizeAccount";

const BZ_BUCKET_ID = import.meta.env.BZ_BUCKET_ID;

export type BackBlazeFile = {
	accountId: string;
	action: string;
	bucketId: string;
	contentLength: number;
	contentSha1: string;
	contentType: string;
	fileId: string;
	fileInfo: { src_last_modified_millis: string };
	fileName: string;
	size: number;
	uploadTimestamp: number;
};

export type GetFilesFromBucketResponse = Array<BackBlazeFile>;

export async function getFilesFromBucket(
	auth: AuthorizeAccountResponse
): Promise<GetFilesFromBucketResponse> {
	const { apiUrl, authorizationToken } = auth;
	const baseUrl = `${apiUrl}/b2api/v1/b2_list_file_names`;

	const response = await fetch(baseUrl, {
		method: "POST",
		body: JSON.stringify({
			bucketId: BZ_BUCKET_ID,
		}),
		headers: { Authorization: authorizationToken },
	});

	return (await response.json()).files;
}
