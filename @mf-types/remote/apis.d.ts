
    export type RemoteKeys = 'remote/Button' | 'remote/Card';
    type PackageType<T> = T extends 'remote/Card' ? typeof import('remote/Card') :T extends 'remote/Button' ? typeof import('remote/Button') :any;