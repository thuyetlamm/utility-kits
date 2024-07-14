type MergeObject<T> = T extends object ? T : never

export type { MergeObject };
