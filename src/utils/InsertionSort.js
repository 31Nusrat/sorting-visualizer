import React from "react";

const InsertionSortExplanation = () => {
  const styles = {
    container: {
      maxWidth: 700,
      margin: "40px auto",
      padding: "20px 30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f0f8ff",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      color: "#234567",
      lineHeight: 1.6,
    },
    header: {
      color: "#2a52be",
      marginBottom: 12,
      textAlign: "center",
      fontWeight: "700",
      fontSize: "2.2rem",
      letterSpacing: "1px",
    },
    sectionTitle: {
      color: "#1e40af",
      marginTop: 28,
      marginBottom: 12,
      fontWeight: 600,
      fontSize: "1.4rem",
      borderBottom: "2px solid #2a52be",
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
      backgroundColor: "#dbeafe",
      color: "#1e40af",
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
      color: "#2a52be",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Insertion Sort Explanation</h2>

      <p style={styles.paragraph}>
        <strong>What is Insertion Sort?</strong><br />
        Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It works similarly to how you might sort playing cards in your hands.
      </p>

      <p style={styles.paragraph}>
        It iterates through the array and inserts each element into its correct position in the already sorted part on the left.
      </p>

      <h3 style={styles.sectionTitle}>How Insertion Sort Works Step-by-Step:</h3>
      <ol style={styles.list}>
        <li>Start from the second element (index 1), compare it with elements before it.</li>
        <li>Shift all elements that are greater than the current element to the right.</li>
        <li>Insert the current element at the correct position.</li>
        <li>Repeat for all elements until the array is sorted.</li>
      </ol>

      <h3 style={styles.sectionTitle}>Visual Example</h3>
      <p style={styles.paragraph}>
        Start with the array: <code style={styles.inlineCode}>[12, 11, 13, 5, 6]</code>
      </p>

      <div>
        <p style={styles.passTitle}>Pass 1:</p>
        <ul style={styles.passList}>
          <li>Compare 11 with 12; since 11 &lt; 12, shift 12 to the right.</li>
          <li>Insert 11 before 12 → [11, 12, 13, 5, 6]</li>
        </ul>

        <p style={styles.passTitle}>Pass 2:</p>
        <ul style={styles.passList}>
          <li>Compare 13 with 12; 13 &gt; 12, no change → [11, 12, 13, 5, 6]</li>
        </ul>

        <p style={styles.passTitle}>Pass 3:</p>
        <ul style={styles.passList}>
          <li>Compare 5 with 13, 12, and 11; all are greater, shift them right.</li>
          <li>Insert 5 at the beginning → [5, 11, 12, 13, 6]</li>
        </ul>

        <p style={styles.passTitle}>Pass 4:</p>
        <ul style={styles.passList}>
          <li>Compare 6 with 13, 12, and 11; shift 13, 12, and 11 right.</li>
          <li>Insert 6 after 5 → [5, 6, 11, 12, 13]</li>
        </ul>

        <p style={styles.paragraph}>Array is now sorted!</p>
      </div>

      <h3 style={styles.sectionTitle}>Time Complexity</h3>
      <ul style={styles.list}>
        <li>Worst and average case: O(n²) — when the array is in reverse order.</li>
        <li>Best case: O(n) — when the array is already sorted.</li>
      </ul>

      <h3 style={styles.sectionTitle}>Key Points</h3>
      <ul style={styles.list}>
        <li>Efficient for small or nearly sorted arrays.</li>
        <li>Stable sort (maintains relative order of equal elements).</li>
        <li>Works well as a building block in more complex algorithms.</li>
      </ul>
    </div>
  );
};

export default InsertionSortExplanation;
