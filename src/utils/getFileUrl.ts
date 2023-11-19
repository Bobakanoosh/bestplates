export function getFileUrl(fileName: string) {
	const url = new URL(import.meta.env.IMAGE_ROOT);
	url.pathname = fileName;
	return url.toString();
}
