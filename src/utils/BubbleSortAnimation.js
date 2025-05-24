import React from "react";

const BubbleSortExplanation = () => {
  const styles = {
    container: {
      maxWidth: 720,
      margin: "40px auto",
      padding: "25px 35px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#fefefe",
      borderRadius: 16,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      color: "#222",
      lineHeight: 1.7,
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
    },
    header: {
      color: "#007acc",
      marginBottom: 18,
      textAlign: "center",
      fontWeight: "700",
      fontSize: "2.4rem",
      letterSpacing: "1.2px",
      textShadow: "0 1px 2px rgba(0, 122, 204, 0.3)",
    },
    sectionTitle: {
      color: "#004a80",
      marginTop: 36,
      marginBottom: 16,
      fontWeight: 700,
      fontSize: "1.5rem",
      borderBottom: "3px solid #007acc",
      paddingBottom: 8,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    paragraph: {
      fontSize: "1.15rem",
      marginBottom: 20,
      color: "#3a3a3a",
    },
    list: {
      paddingLeft: 24,
      marginBottom: 24,
      fontSize: "1.1rem",
      color: "#4a4a4a",
    },
    inlineCode: {
      backgroundColor: "#e1ecf4",
      color: "#005f99",
      padding: "3px 8px",
      borderRadius: 6,
      fontFamily: "'Courier New', Courier, monospace",
      fontWeight: "700",
      fontSize: "1.05rem",
      userSelect: "all",
    },
    passList: {
      paddingLeft: 26,
      marginBottom: 14,
      listStyleType: "disc",
      color: "#505050",
      fontSize: "1.05rem",
    },
    passTitle: {
      fontWeight: "700",
      marginTop: 20,
      marginBottom: 10,
      color: "#007acc",
      fontSize: "1.2rem",
      letterSpacing: "0.03em",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Bubble Sort Explanation</h2>

      <p style={styles.paragraph}>
        <strong>What is Bubble Sort?</strong><br />
        Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly
        stepping through the list, comparing adjacent pairs of items, and swapping them
        if they are in the wrong order. This process is repeated until the list is sorted.
      </p>

      <p style={styles.paragraph}>
        The name “Bubble” comes from the way smaller elements “bubble” to the top (beginning) of the list with each pass.
      </p>

      <h3 style={styles.sectionTitle}>How Bubble Sort Works Step-by-Step:</h3>
      <ol style={styles.list}>
        <li>Start at the beginning of the array.</li>
        <li>Compare the first two elements.</li>
        <li>If the first element is greater than the second, swap them.</li>
        <li>Move one position forward and compare the next two elements.</li>
        <li>Repeat swapping if needed.</li>
        <li>At the end of the first pass, the largest element will have “bubbled” to the last position.</li>
        <li>Repeat the entire process for the rest of the array (excluding the last sorted elements).</li>
        <li>Continue until no swaps are needed in a full pass, meaning the array is sorted.</li>
      </ol>

      <h3 style={styles.sectionTitle}>Visual Example</h3>
      <p style={styles.paragraph}>
        Start with the array: <code style={styles.inlineCode}>[5, 3, 8, 4, 2]</code>
      </p>

      <div>
        <p style={styles.passTitle}>Pass 1:</p>
        <ul style={styles.passList}>
          <li>Compare 5 and 3 → swap → [3, 5, 8, 4, 2]</li>
          <li>Compare 5 and 8 → no swap</li>
          <li>Compare 8 and 4 → swap → [3, 5, 4, 8, 2]</li>
          <li>Compare 8 and 2 → swap → [3, 5, 4, 2, 8]</li>
        </ul>
        <p style={styles.paragraph}>8 is now at the end (sorted).</p>

        <p style={styles.passTitle}>Pass 2:</p>
        <ul style={styles.passList}>
          <li>Compare 3 and 5 → no swap</li>
          <li>Compare 5 and 4 → swap → [3, 4, 5, 2, 8]</li>
          <li>Compare 5 and 2 → swap → [3, 4, 2, 5, 8]</li>
        </ul>
        <p style={styles.paragraph}>5 is now in the correct place.</p>

        <p style={styles.passTitle}>Pass 3:</p>
        <ul style={styles.passList}>
          <li>Compare 3 and 4 → no swap</li>
          <li>Compare 4 and 2 → swap → [3, 2, 4, 5, 8]</li>
        </ul>

        <p style={styles.passTitle}>Pass 4:</p>
        <ul style={styles.passList}>
          <li>Compare 3 and 2 → swap → [2, 3, 4, 5, 8]</li>
        </ul>

        <p style={styles.paragraph}>The array is now sorted!</p>
      </div>

      <h3 style={styles.sectionTitle}>Time Complexity</h3>
      <ul style={styles.list}>
        <li>Worst and average case: O(n²) — you may compare each element with every other element.</li>
        <li>Best case: O(n) — if the array is already sorted, only one pass without swaps is needed.</li>
      </ul>

      <h3 style={styles.sectionTitle}>Key Points</h3>
      <ul style={styles.list}>
        <li>Simple but inefficient on large arrays.</li>
        <li>Good for teaching sorting fundamentals.</li>
        <li>Works in-place (no extra memory needed).</li>
      </ul>
    </div>
  );
};

export default BubbleSortExplanation;
