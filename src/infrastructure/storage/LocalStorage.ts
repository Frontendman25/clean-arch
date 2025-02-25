export class LocalStorageService {
  static set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static get(key: string): any {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
}
