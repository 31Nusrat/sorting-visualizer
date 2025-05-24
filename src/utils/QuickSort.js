import React from "react";

const QuickSortExplanation = () => {
  const styles = {
    container: {
      maxWidth: 700,
      margin: "40px auto",
      padding: "20px 30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f0f9ff",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      color: "#235789",
      lineHeight: 1.6,
    },
    header: {
      color: "#0d3b66",
      marginBottom: 12,
      textAlign: "center",
      fontWeight: "700",
      fontSize: "2.2rem",
      letterSpacing: "1px",
    },
    sectionTitle: {
      color: "#144d53",
      marginTop: 28,
      marginBottom: 12,
      fontWeight: 600,
      fontSize: "1.4rem",
      borderBottom: "2px solid #0d3b66",
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
      backgroundColor: "#d3e4f1",
      color: "#0d3b66",
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
      color: "#0d3b66",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Quick Sort Explanation</h2>

      <p style={styles.paragraph}>
        <strong>What is Quick Sort?</strong><br />
        Quick Sort is a highly efficient divide-and-conquer sorting algorithm that works by selecting a “pivot” element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
      </p>

      <h3 style={styles.sectionTitle}>How Quick Sort Works Step-by-Step:</h3>
      <ol style={styles.list}>
        <li>Choose a pivot element from the array (commonly the last element).</li>
        <li>Rearrange elements so that all elements less than the pivot come before it, and all greater come after (partitioning).</li>
        <li>Recursively apply the above steps to the sub-array of elements before and after the pivot.</li>
        <li>Repeat until the base case of a sub-array with zero or one element is reached.</li>
      </ol>

      <h3 style={styles.sectionTitle}>Visual Example</h3>
      <p style={styles.paragraph}>
        Starting array: <code style={styles.inlineCode}>[29, 10, 14, 37, 13]</code>
      </p>

      <div>
        <p style={styles.passTitle}>Step 1: Choose Pivot</p>
        <ul style={styles.passList}>
          <li>Choose last element <code style={styles.inlineCode}>13</code> as pivot.</li>
        </ul>

        <p style={styles.passTitle}>Step 2: Partition</p>
        <ul style={styles.passList}>
          <li>Rearrange so that elements less than 13 come before it and others after: <code>[10, 13, 14, 37, 29]</code></li>
        </ul>

        <p style={styles.passTitle}>Step 3: Recursively Sort Sub-arrays</p>
        <ul style={styles.passList}>
          <li>Sort left sub-array <code>[10]</code> (already sorted)</li>
          <li>Sort right sub-array <code>[14, 37, 29]</code></li>
        </ul>

        <p style={styles.passTitle}>Step 4: Repeat</p>
        <ul style={styles.passList}>
          <li>Choose pivot <code>29</code> in right sub-array, partition and sort recursively.</li>
          <li>Final sorted array: <code>[10, 13, 14, 29, 37]</code></li>
        </ul>
      </div>

      <h3 style={styles.sectionTitle}>Time Complexity</h3>
      <ul style={styles.list}>
        <li>Best and average case: O(n log n)</li>
        <li>Worst case (already sorted or reverse sorted): O(n²)</li>
      </ul>

      <h3 style={styles.sectionTitle}>Key Points</h3>
      <ul style={styles.list}>
        <li>In-place sorting (does not require extra space like Merge Sort).</li>
        <li>Not stable (equal elements may change order).</li>
        <li>Performance depends heavily on pivot choice.</li>
      </ul>
    </div>
  );
};

export default QuickSortExplanation;
