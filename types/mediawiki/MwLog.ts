export interface MwLog {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deprecate( obj: object, key: string, val: any, msg?: string, logName?: string ): void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error( ...msg: any[] ): void;
	warn( ...msg: string[] ): void;
}
