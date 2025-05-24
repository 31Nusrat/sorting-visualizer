import React from "react";

const HeapSortExplanation = () => {
  const styles = {
    container: {
      maxWidth: 700,
      margin: "40px auto",
      padding: "20px 30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#fff8e1",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      color: "#6a4c93",
      lineHeight: 1.6,
    },
    header: {
      color: "#4a235a",
      marginBottom: 12,
      textAlign: "center",
      fontWeight: "700",
      fontSize: "2.2rem",
      letterSpacing: "1px",
    },
    sectionTitle: {
      color: "#6a4c93",
      marginTop: 28,
      marginBottom: 12,
      fontWeight: 600,
      fontSize: "1.4rem",
      borderBottom: "2px solid #4a235a",
      paddingBottom: 6,
    },
    paragraph: {
      fontSize: "1.1rem",
      marginBottom: 14,
    },
    list: {
      paddingLeft: 20,
      marginBottom: 18,
    },
    inlineCode: {
      backgroundColor: "#d6cadd",
      color: "#4a235a",
      padding: "2px 6px",
      borderRadius: 5,
      fontFamily: "'Courier New', Courier, monospace",
      fontWeight: "600",
      fontSize: "1rem",
    },
    passList: {
      paddingLeft: 20,
      marginBottom: 10,
      listStyleType: "disc",
    },
    passTitle: {
      fontWeight: "600",
      marginTop: 16,
      marginBottom: 6,
      color: "#4a235a",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Heap Sort Explanation</h2>

      <p style={styles.paragraph}>
        <strong>What is Heap Sort?</strong><br />
        Heap Sort is a comparison-based sorting algorithm that uses a special binary tree called a heap to sort elements efficiently. It involves building a max-heap from the input data, then repeatedly removing the largest element from the heap and placing it at the end of the sorted array.
      </p>

      <h3 style={styles.sectionTitle}>How Heap Sort Works Step-by-Step:</h3>
      <ol style={styles.list}>
        <li>Build a max-heap from the input array. In a max-heap, the largest value is at the root.</li>
        <li>Swap the root (largest) element with the last element of the heap.</li>
        <li>Reduce the heap size by one, effectively removing the last element from the heap.</li>
        <li>Heapify the root element to maintain the max-heap property.</li>
        <li>Repeat steps 2-4 until the heap size is 1.</li>
      </ol>

      <h3 style={styles.sectionTitle}>Visual Example</h3>
      <p style={styles.paragraph}>
        Starting array: <code style={styles.inlineCode}>[4, 10, 3, 5, 1]</code>
      </p>

      <div>
        <p style={styles.passTitle}>Step 1: Build Max-Heap</p>
        <ul style={styles.passList}>
          <li>Max-heap: <code style={styles.inlineCode}>[10, 5, 3, 4, 1]</code></li>
        </ul>

        <p style={styles.passTitle}>Step 2: Swap Root with Last</p>
        <ul style={styles.passList}>
          <li>Swap 10 with 1: <code style={styles.inlineCode}>[1, 5, 3, 4, 10]</code></li>
        </ul>

        <p style={styles.passTitle}>Step 3: Heapify Root</p>
        <ul style={styles.passList}>
          <li>Heapify root 1: <code style={styles.inlineCode}>[5, 4, 3, 1, 10]</code></li>
        </ul>

        <p style={styles.passTitle}>Step 4: Repeat</p>
        <ul style={styles.passList}>
          <li>Swap 5 with 1: <code style={styles.inlineCode}>[1, 4, 3, 5, 10]</code></li>
          <li>Heapify root: <code style={styles.inlineCode}>[4, 1, 3, 5, 10]</code></li>
          <li>Continue until fully sorted: <code style={styles.inlineCode}>[1, 3, 4, 5, 10]</code></li>
        </ul>
      </div>

      <h3 style={styles.sectionTitle}>Time Complexity</h3>
      <ul style={styles.list}>
        <li>Best, average, and worst case: O(n log n)</li>
      </ul>

      <h3 style={styles.sectionTitle}>Key Points</h3>
      <ul style={styles.list}>
        <li>In-place sorting algorithm (uses constant extra space).</li>
        <li>Not stable (equal elements might be reordered).</li>
        <li>Uses binary heap data structure.</li>
      </ul>
    </div>
  );
};

export default HeapSortExplanation;
