// pages/api/insertData.js
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('Products'); // Your collection name

      // Data from request body
      const { name, description, imageURL, price, type } = req.body;

      // Sample data to insert, you can replace it with request data
      const data = {
        name,
        description,
        imageURL,
        price,
        type,
      };

      const result = await collection.insertOne(data);
      res.status(200).json({ message: 'Data inserted successfully!', id: result.insertedId });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Failed to insert data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
