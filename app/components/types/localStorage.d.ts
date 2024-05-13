// localStorage.d.ts

interface LocalStorage {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
	removeItem(key: string): void;
	clear(): void;
	readonly length: number;
	key(index: number): string | null;
}

declare var localStorage: LocalStorage;
