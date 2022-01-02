// iterator

class CounterIteratorResult {

  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

// iterable

class CounterIterable {

  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counter = new CounterIterable(1, 20);
for (let value of counter) {
  console.table(value);
}