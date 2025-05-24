import React from "react";

const MergeSortExplanation = () => {
  const styles = {
    container: {
      maxWidth: 700,
      margin: "40px auto",
      padding: "20px 30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#fff8f0",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      color: "#3a3a3a",
      lineHeight: 1.6,
    },
    header: {
      color: "#c1440e",
      marginBottom: 12,
      textAlign: "center",
      fontWeight: "700",
      fontSize: "2.2rem",
      letterSpacing: "1px",
    },
    sectionTitle: {
      color: "#a63705",
      marginTop: 28,
      marginBottom: 12,
      fontWeight: 600,
      fontSize: "1.4rem",
      borderBottom: "2px solid #c1440e",
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
      backgroundColor: "#fce8d8",
      color: "#a63705",
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
      color: "#c1440e",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Merge Sort Explanation</h2>

      <p style={styles.paragraph}>
        <strong>What is Merge Sort?</strong><br />
        Merge Sort is a classic divide-and-conquer sorting algorithm. It divides the array into two halves, recursively sorts them, and then merges the sorted halves to produce the final sorted array.
      </p>

      <h3 style={styles.sectionTitle}>How Merge Sort Works Step-by-Step:</h3>
      <ol style={styles.list}>
        <li>If the array has one or zero elements, it is already sorted.</li>
        <li>Divide the array into two roughly equal halves.</li>
        <li>Recursively apply Merge Sort to both halves.</li>
        <li>Merge the two sorted halves into one sorted array.</li>
      </ol>

      <h3 style={styles.sectionTitle}>Visual Example</h3>
      <p style={styles.paragraph}>
        Start with the array: <code style={styles.inlineCode}>[38, 27, 43, 3, 9, 82, 10]</code>
      </p>

      <div>
        <p style={styles.passTitle}>Step 1: Divide</p>
        <ul style={styles.passList}>
          <li>Divide into two halves: [38, 27, 43, 3] and [9, 82, 10]</li>
          <li>Recursively divide further until single elements: [38], [27], [43], [3], [9], [82], [10]</li>
        </ul>

        <p style={styles.passTitle}>Step 2: Merge</p>
        <ul style={styles.passList}>
          <li>Merge [38] and [27] → [27, 38]</li>
          <li>Merge [43] and [3] → [3, 43]</li>
          <li>Merge [27, 38] and [3, 43] → [3, 27, 38, 43]</li>
          <li>Merge [9] and [82] → [9, 82]</li>
          <li>Merge [9, 82] and [10] → [9, 10, 82]</li>
          <li>Finally merge [3, 27, 38, 43] and [9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]</li>
        </ul>

        <p style={styles.paragraph}>Array is now sorted!</p>
      </div>

      <h3 style={styles.sectionTitle}>Time Complexity</h3>
      <ul style={styles.list}>
        <li>Best, average, and worst case: O(n log n)</li>
      </ul>

      <h3 style={styles.sectionTitle}>Key Points</h3>
      <ul style={styles.list}>
        <li>Stable sort (does not change relative order of equal elements).</li>
        <li>Uses extra space proportional to the array size (not in-place).</li>
        <li>Very efficient for large datasets.</li>
      </ul>
    </div>
  );
};

export default MergeSortExplanation;
