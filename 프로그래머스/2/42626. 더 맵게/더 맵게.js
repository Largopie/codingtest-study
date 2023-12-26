class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(currentIndex) {
    return Math.floor((currentIndex - 1) / 2);
  }

  getRightIndex(currentIndex) {
    return currentIndex * 2 + 2;
  }

  getLeftIndex(currentIndex) {
    return currentIndex * 2 + 1;
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();

    const minNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return minNode;
  }

  bubbleUp() {
    let currentIndex = this.size() - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  bubbleDown() {
    let currentIndex = 0;
    let rightIndex = this.getRightIndex(currentIndex);
    let leftIndex = this.getLeftIndex(currentIndex);

    while (
      (rightIndex < this.size() && this.heap[rightIndex] < this.heap[currentIndex]) ||
      (leftIndex < this.size() && this.heap[leftIndex] < this.heap[currentIndex])
    ) {
      let minIndex = leftIndex;

      if (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[leftIndex]) minIndex = rightIndex;
      this.swap(minIndex, currentIndex);
      currentIndex = minIndex;
      rightIndex = this.getRightIndex(currentIndex);
      leftIndex = this.getLeftIndex(currentIndex);
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  let count = 0;

  scoville.forEach((scovilleValue) => {
    minHeap.push(scovilleValue);
  });

  while (minHeap.heap[0] < K && minHeap.size() >= 2) {
    const minScoville = minHeap.pop();
    const secondMinScville = minHeap.pop();
    const combineScoville = minScoville + secondMinScville * 2;

    minHeap.push(combineScoville);
    count += 1;
  }

  return minHeap.heap[0] >= K ? count : -1;
}
