"use client";
import React from 'react';

const InsertDataComponent = () => {
  const insertData = async () => {
    try {
      // Corrected API endpoint
      const response = await fetch('/api/insertData', {
        method: 'POST',
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data inserted:', result);
      } else {
        console.error('Error inserting data');
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
      <button onClick={insertData}>Insert Data into MongoDB</button>
    </div>
  );
};

export default InsertDataComponent;
