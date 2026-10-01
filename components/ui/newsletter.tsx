"use client";
import { useState } from "react";
export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      id="newsletter"
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email for newsletter
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        required
        aria-label="Email for newsletter"
      />
      <button type="submit">Search</button>
      {submitted && (
        <p className="newsletter-feedback" role="status">
          Thank you! This demo has recorded your request locally.
        </p>
      )}
    </form>
  );
}
