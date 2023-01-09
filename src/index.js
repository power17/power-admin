class FastCache {
  constructor() {
    this.list = {}
  }
  set(key, value) {
    this.list[key] = value
  }
  get(key) {
    return this.list[key]
  }
}
console.log(FastCache)
window.FastCache = FastCache
