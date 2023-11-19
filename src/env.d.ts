/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly BZ_ACCOUNT_ID: string;
	readonly BZ_APPLICATION_KEY: string;
	readonly BZ_BUCKET_ID: string;
	readonly IMAGE_ROOT: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
