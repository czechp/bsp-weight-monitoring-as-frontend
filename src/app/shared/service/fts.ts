import Fuse from 'fuse.js';

export class FTService {
  static search<T>(data: T[], keys: string[], query: string): T[] {
    return new Fuse<T>(data, {
      keys: keys,
      threshold: 0.0,
      distance: 0,
      useExtendedSearch: false,
      ignoreLocation: true
    }).search(query)
      .map(result => result.item);
  }
}
