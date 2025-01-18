import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';

const files = import.meta.glob('/src/pages/**/*.svx');

export const entries: EntryGenerator = () =>
	Object.keys(files).map((path) => ({
		path: path.slice(11, -4)
	}));

export async function load({ params }) {
	try {
		const path = `/src/pages/${params.path.length > 0 ? params.path : 'home'}.svx`;
    const content = await files[path]() as { default: ConstructorOfATypedSvelteComponent; metadata: Record<string, string> };

		return {
      path: params.path,
			content: content.default,
			metadata: content.metadata as {
        title?: string;
      } | undefined,
		};
	} catch {
		error(404, 'Not Found');
	}
}