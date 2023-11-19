import { authorizeAccount } from "./authorizeAccount";
import { getFileUrl } from "./getFileUrl";
import { getFilesFromBucket, type BackBlazeFile } from "./getFilesFromBucket";

export async function fetchFiles(): Promise<BackBlazeFile[]> {
	const authorized = await authorizeAccount();
	if (!authorized) {
		return [];
	}

	return await getFilesFromBucket(authorized);
}
