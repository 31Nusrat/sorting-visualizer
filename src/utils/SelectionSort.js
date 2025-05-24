import React from "react";

const SelectionSortExplanation = () => {
  const styles = {
    container: {
      maxWidth: 700,
      margin: "40px auto",
      padding: "20px 30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      color: "#333",
      lineHeight: 1.6,
    },
    header: {
      color: "#d35400",
      marginBottom: 12,
      textAlign: "center",
      fontWeight: "700",
      fontSize: "2.2rem",
      letterSpacing: "1px",
    },
    sectionTitle: {
      color: "#a84300",
      marginTop: 28,
      marginBottom: 12,
      fontWeight: 600,
      fontSize: "1.4rem",
      borderBottom: "2px solid #d35400",
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
      backgroundColor: "#fce4d6",
      color: "#a84300",
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
      color: "#d35400",
      fontSize: "1.1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Selection Sort Explanation</h2>

      <p style={styles.paragraph}>
        <strong>What is Selection Sort?</strong><br />
        Selection Sort is a simple sorting algorithm that divides the array into a sorted and unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the end of the sorted part.
      </p>

      <p style={styles.paragraph}>
        It works by selecting the minimum element in the unsorted array and swapping it with the element at the beginning, then moving the boundary between sorted and unsorted forward by one.
      </p>

      <h3 style={styles.sectionTitle}>How Selection Sort Works Step-by-Step:</h3>
      <ol style={styles.list}>
        <li>Start with the first element as the minimum.</li>
        <li>Search the rest of the array to find the true minimum element.</li>
        <li>Swap the minimum element found with the element at the current position.</li>
        <li>Move to the next position and repeat until the entire array is sorted.</li>
      </ol>

      <h3 style={styles.sectionTitle}>Visual Example</h3>
      <p style={styles.paragraph}>
        Start with the array: <code style={styles.inlineCode}>[29, 10, 14, 37, 13]</code>
      </p>

      <div>
        <p style={styles.passTitle}>Pass 1:</p>
        <ul style={styles.passList}>
          <li>Find minimum from entire array (10).</li>
          <li>Swap 10 with first element 29 → [10, 29, 14, 37, 13]</li>
        </ul>

        <p style={styles.passTitle}>Pass 2:</p>
        <ul style={styles.passList}>
          <li>Find minimum from remaining array (14).</li>
          <li>Swap 14 with 29 → [10, 14, 29, 37, 13]</li>
        </ul>

        <p style={styles.passTitle}>Pass 3:</p>
        <ul style={styles.passList}>
          <li>Find minimum from remaining array (13).</li>
          <li>Swap 13 with 29 → [10, 14, 13, 37, 29]</li>
        </ul>

        <p style={styles.passTitle}>Pass 4:</p>
        <ul style={styles.passList}>
          <li>Find minimum from remaining array (29).</li>
          <li>Swap 29 with 37 → [10, 14, 13, 29, 37]</li>
        </ul>

        <p style={styles.paragraph}>Array is now sorted!</p>
      </div>

      <h3 style={styles.sectionTitle}>Time Complexity</h3>
      <ul style={styles.list}>
        <li>Worst, average, and best case: O(n²) — because it always scans the remaining elements to find the minimum.</li>
      </ul>

      <h3 style={styles.sectionTitle}>Key Points</h3>
      <ul style={styles.list}>
        <li>Simple and intuitive.</li>
        <li>Does minimal swaps — at most one swap per pass.</li>
        <li>Not efficient for large arrays.</li>
      </ul>
    </div>
  );
};

export default SelectionSortExplanation;
