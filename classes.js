class Materializer {
  constructor(target, activated = false) {
    this.target = target;
    this.activated = activated;
  }

  activate() {
    this.activated = true;
  }

  materialize() {
    if (this.activated) {
      return this.target;
    }
  }
}